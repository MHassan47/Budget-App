import axios from "axios";

const API_URL = "/api/transactions/";

// Create new goal
const createTransaction = async (transactionData) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.post(API_URL + "add", transactionData);

  return response.data;
};

// Get user goals
const getTransactions = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get(API_URL);

  return response.data;
};

const transactionService = {
  createTransaction,
  getTransactions,
};

export default transactionService;
