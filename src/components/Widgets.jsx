import { useSelector } from "react-redux";

import imgCompass from "./../assets/compass.svg";
import imgHumedity from "./../assets/humedity.svg";
import imgPressure from "./../assets/pressure.svg";
import imgTemperature from "./../assets/max-min-temp.svg";

function Widgets() {
  const city = useSelector((state) => state.weather.city);

  return (
    <div className="flex flex-row flex-wrap gap-7">
      <div className="flex flex-row flex-nowrap justify-evenly gap-x-5 p-7 rounded-xl bg-[#ecf3f8] w-[357px]">
        <div className="flex flex-col flex-nowrap justify-evenly">
          <p className="font-medium text-lg">Wind</p>
          <p className="text-sm text-[#999999]">Today wind speed</p>
          <p className="font-medium text-xl">{city?.wind?.speed} km/h</p>
        </div>
        <img src={imgCompass} alt="img-widget" width="120" />
      </div>
      <div className="flex flex-row flex-nowrap justify-evenly gap-x-5 p-7 rounded-xl bg-[#ecf3f8] w-[357px]">
        <div className="flex flex-col flex-nowrap justify-evenly">
          <p className="font-medium text-lg">Temperature</p>
          <p className="text-sm text-[#999999]">Today max and min temperature</p>
          <p className="font-medium text-xl">{city?.main?.temp_min}° / {city?.main?.temp_max}°</p>
        </div>
        <img src={imgTemperature} alt="img-widget" width="120" />
      </div>
      <div className="flex flex-row flex-nowrap justify-evenly gap-x-5 p-7 rounded-xl bg-[#ecf3f8] w-[357px]">
        <div className="flex flex-col flex-nowrap justify-evenly">
          <p className="font-medium text-lg">Clouds</p>
          <p className="text-sm text-[#999999]">Today cloudiness</p>
          <p className="font-medium text-xl">{city?.clouds?.all}%</p>
        </div>
        <img src={imgHumedity} alt="img-widget" width="120" />
      </div>
      <div className="flex flex-row flex-nowrap justify-evenly gap-x-5 p-7 rounded-xl bg-[#ecf3f8] w-[357px]">
        <div className="flex flex-col flex-nowrap justify-evenly">
          <p className="font-medium text-lg">Pressure</p>
          <p className="text-sm text-[#999999]">Today pressure</p>
          <p className="font-medium text-xl">{city?.main?.pressure} hPa</p>
        </div>
        <img src={imgPressure} alt="img-widget" width="120" />
      </div>
    </div>
  );
}

export default Widgets;
