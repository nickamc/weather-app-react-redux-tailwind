import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  city: {

  }
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getCity: (state, action) => {
      state.city = action.payload;
      const newCity = {
        id: action.payload.id,
        name: action.payload.name,
        coord: action.payload.coord,
        temp: action.payload.main.temp,
        icon: action.payload.weather.icon
      }
      state.list = state.list.some((city) => city.name === newCity.name || city.id === newCity.id) ? [...state.list] : [...state.list, newCity]
    },
    deleteCity: (state, action) => {
      state.list = state.list.filter((city) => city.name !== action.payload)
    }
  },
});

export const { getCity, deleteCity } = weatherSlice.actions;

export default weatherSlice.reducer;
