import { useSelector } from "react-redux";

import imgApp from '../assets/weather-app.png'
import City from "./City";

const Navbar = () => {
  const list = useSelector((state) => state.weather.list);
  return (
    <div className="flex flex-col flex-nowrap gap-7 p-7">
      <div className="flex flex-nowrap justify-start items-center gap-3">
        <img className="rounded-xl" src={imgApp} alt="developer" width="30"/>
        <p className="text-center font-medium text-lg">Weather App</p>
      </div>
      {list.map((city) => (
        <City
          key={city.id}
          id={city.id}
          name={city.name}
          temp={city.temp}
          icon={city.icon}
        />
      ))}
    </div>
  );
};

export default Navbar;
