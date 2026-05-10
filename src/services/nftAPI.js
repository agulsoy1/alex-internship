import axios from "axios";

const API_URL = "https://us-central1-nft-cloud-functions.cloudfunctions.net";

export const getNewItems = async () => {
  const response = await axios.get(`${API_URL}/newItems`);

  return response.data;
};
