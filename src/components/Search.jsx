import { useDispatch } from "react-redux";

import { apiGetName } from "../store/slice/weather/api";
import imgSearch from "../assets/search.svg";
import imgDeveloper from "../assets/developer.png";

function Search() {
  const dispatch = useDispatch();

  const handlerOnKeyDown = (e) => {
    if (e.keyCode == 13) {
      dispatch(apiGetName(e.target.value));
    }
  };

  return (
    <div className="flex flex-nowrap justify-between">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img className="mr-1" src={imgSearch} alt="search" width="20" />
        </span>
        <input
          onKeyDown={handlerOnKeyDown}
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for places..."
          type="text"
          name="search"
        />
      </label>
      <a href="https://github.com/nickamc">
        <img
          className="rounded-xl"
          src={imgDeveloper}
          alt="developer"
          width="40"
        />
      </a>
    </div>
  );
}

export default Search;
