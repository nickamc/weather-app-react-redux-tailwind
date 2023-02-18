import Search from "../Search";
import Temperature from "./Temperature";
import Widgets from "../Widgets";

function Today() {

  return (
    <div className="flex flex-col flex-nowrap p-7 gap-7 w-[800px]">
      <Search />
      <Temperature />
      <Widgets />
    </div>
  );
}

export default Today;
