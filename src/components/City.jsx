import { useDispatch } from "react-redux";

import { deleteCity } from "../store/slice/weather";
import { apiGetID } from "../store/slice/weather/api";

const City = (props) => {
  const { id, name, temp, icon } = props;
  const dispatch = useDispatch();

  const onClickDelete = (e) => {
    dispatch(deleteCity(name));
  };

  const onClickSelect = (e) => {
    dispatch(apiGetID(id));
  };

  return (
    <div className="flex flex-col flex-nowrap items-center justify-center rounded-xl p-5 gap-3 hover:bg-[#ecf3f8]">
      <div className="flex flex-nowrap justify-evenly items-center gap-5 -mt-2">
        <div>
          <p className="font-medium">{name}</p>
          <p className="font-medium text-xl text-[#999999]">{temp}°</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="temp"
          width="60"
        />
      </div>
      <div className="flex gap-5 justify-center">
        <button
          className="p-1 bg-[#c4e2ff] hover:bg-[#24609b] text-white w-16 rounded-md"
          type="button"
          onClick={onClickSelect}
        >
          View
        </button>
        <button
          className="p-1 bg-gray-300 hover:bg-gray-400 text-white w-16 rounded-md"
          type="button"
          onClick={onClickDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default City;
