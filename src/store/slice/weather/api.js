import axios from "axios";
import { getCity } from ".";

const {
	VITE_API_KEY,
	VITE_API_URL
} = import.meta.env

export const apiGetName =
  (city = "Lima") =>
  async (dispatch) => {
    const newCity = await axios
      .get(
        `${VITE_API_URL}weather?q=${city}&appid=${VITE_API_KEY}&units=metric`
      )
      .then((response) => response.data)
      .catch((error) => console.log(error));

    newCity.week = await axios
      .get(
        `${VITE_API_URL}forecast?q=${city}&appid=${VITE_API_KEY}&units=metric`
      )
      .then((response) => response.data.list)
      .catch((error) => console.log(error));
    newCity.weather = newCity.weather[0];
    dispatch(getCity(newCity));
  };

export const apiGetID =
  (id = 3936456) =>
  async (dispatch) => {
    const newCity = await axios
      .get(
        `${VITE_API_URL}weather?id=${id}&appid=${VITE_API_KEY}&units=metric`
      )
      .then((response) => response.data)
      .catch((error) => console.log(error));

    newCity.week = await axios
      .get(
        `${VITE_API_URL}forecast?id=${id}&appid=${VITE_API_KEY}&units=metric`
      )
      .then((response) => response.data.list)
      .catch((error) => console.log(error));
    newCity.weather = newCity.weather[0];
    dispatch(getCity(newCity));
  };
