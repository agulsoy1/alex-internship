import axios from "axios";

const API_URL = "https://us-central1-nft-cloud-functions.cloudfunctions.net";

export const getNewItems = async () => {
  const response = await axios.get(`${API_URL}/newItems`);
  return response.data;
};
export const getHotCollections = async () => {
  const response = await axios.get(`${API_URL}/hotCollections`);
  return response.data;
};
export const getExploreItems = async () => {
  const response = await axios.get(`${API_URL}/explore`);
  return response.data;
};
export const getAuthorItems = async (authorId) => {
  const response = await axios.get(`${API_URL}/authors?author=${authorId}`);
  return response.data;
};
export const getItemDetails = async (nftId) => {
  const response = await axios.get(`${API_URL}/itemDetails?nftId=${nftId}`)
  return response.data;
}