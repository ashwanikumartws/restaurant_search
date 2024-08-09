import axios from "axios";
import { getCategories } from "./api-list";

export const getAllCategories = async () => {
  return axios
    .get(getCategories)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export const SearchCompanyURL = async (data, navigate) => {
  const searchParams = new URLSearchParams(data).toString();

  navigate.push("/searchcompany/?" + searchParams);
};
