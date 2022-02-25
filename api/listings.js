import apiClient from "./client";

const endpoint = "/posts";

const getListing = () => apiClient.get(endpoint);

export default {
  getListing,
};
