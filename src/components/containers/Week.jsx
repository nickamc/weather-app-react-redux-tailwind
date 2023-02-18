import { useSelector } from "react-redux";
import Day from "../Day";

function Week() {
  const week = useSelector((state) => state.weather.city.week);
  return (
    <div className="flex flex-col flex-nowrap gap-4 p-7">
      <p className="text-center font-medium text-lg">This Week</p>
      {week?.map((data) => {
        const date = new Date(data.dt_txt);
        if (date.getHours() == 12)
          return (
            <Day
              key={date.valueOf()}
              dt={date}
              temp={data.main.temp}
              icon={data.weather[0].icon}
            />
          );
      })}
    </div>
  );
}

export default Week;
