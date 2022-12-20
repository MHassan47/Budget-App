import { useState, useRef } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import CalendarModal from "./CalendarModal";
import moment from "moment";
import axios from "axios";
import Button from "../Button";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const calendarRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    // const calendarApi = selected.view.calendar;
    // console.log({
    //   // type: event.type,
    //   title: event.title,
    //   start: moment(event.startDate).toDate(),
    //   end: moment(event.endDate).toDate(),
    // });
    calendarApi.addEvent({
      // type: event.type,
      title: event.title,
      start: moment(event.startDate).toDate(),
      end: moment(event.endDate).toDate(),
    });
  };

  const handleEventAdd = async (data) => {
    console.log(data.event);
    const response = await axios.post("/api/calendar/add", data.event);
    console.log(response);
    // setCurrentEvents(response.data);
  };

  const handleDateSet = async (data) => {
    const response = await axios.get("/api/calendar/");
    console.log(response.data);
    setEvents(response.data);
  };
  const handleEventClick = async (selected) => {
    const eventID = selected.event._def.extendedProps._id;
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      await axios.delete(`/api/calendar/delete/${eventID}`);
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Button
        text="Create Event"
        onClick={() => setOpenModal((prev) => !prev)}
        propClassName={"main__btn"}
      />

      <Box
        display="flex"
        justifyContent="space-between"
        style={{ position: "relative", zIndex: "0" }}
      >
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px" mt="5rem">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              // timeGridPlugin,
              // interactionPlugin,
              // listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              right: "title",
              // right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date) => handleDateSet(date)}
            eventClick={(event) => handleEventClick(event)}
            events={events}
            ref={calendarRef}
          />
        </Box>
      </Box>
      {openModal && (
        <CalendarModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onEventAdded={(event) => onEventAdded(event)}
        />
      )}
    </Box>
  );
}

export default Calendar;
