import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getContracts = async () => {
  const response = await api.get('/contracts');
  return response.data;
};

export const createContract = async (contractData) => {
  const response = await api.post('/contracts', contractData);
  return response.data;
};