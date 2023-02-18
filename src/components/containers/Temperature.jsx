import { useSelector } from "react-redux";

import Chart from "../Chart"

import imgAir from '../../assets/air.svg'
import imgLocation from '../../assets/location.svg'
import imgVisibility from '../../assets/visibility.svg'
import imgWater from '../../assets/water.svg'

function Temperature() {
  const city = useSelector((state) => state.weather.city);

  const date = new Date();
  const dateNow = date.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h24",
  });

  return (
    <div className="flex flex-row flex-wrap content-center justify-around items-center gap-7 p-7 rounded-xl bg-[#c4e2ff] text-[#24609b]">
      <div className="flex flex-col items-stretch gap-y-5">
        <div className="flex flex-row flex-nowrap justify-between items-center gap-x-5">
          <p className="flex flex-nowrap items-center font-medium"> {/*font-bold text-lg*/}
            <img className="mr-1" src={imgLocation} alt="location" width="20" />
            {city?.name}, {city?.sys?.country}
          </p>
          <p className="text-right">{dateNow}</p>
        </div>
        <p className="text-8xl ml-5 text-center">{city?.main?.temp}°</p>
        <p className="mb-5 text-center font-medium">
          {city?.weather?.description[0].toUpperCase() +
            city?.weather?.description.substring(1)}
        </p>
        <ul className="flex flex-nowrap justify-evenly gap-x-5">
          <li className="flex flex-nowrap items-center">
            <img className="mr-1" src={imgVisibility} alt="visibility" width="20" />
            {city?.visibility / 1000} km
          </li>
          <li className="flex flex-nowrap items-center">
            <img className="mr-1" src={imgWater} alt="humedity" width="20" />
            {city?.main?.humidity}%
          </li>
          <li className="flex flex-nowrap items-center">
            <img className="mr-1" src={imgAir} alt="wind" width="20" />
            {city?.wind?.speed} km/h
          </li>
        </ul>
      </div>
      <Chart />
    </div>
  );
}

export default Temperature;
