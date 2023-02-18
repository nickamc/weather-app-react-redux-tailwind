import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const week = useSelector((state) => state.weather.city.week);
  const d1 = week?.slice(0, 4) || [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
        ticks: {
          color: '#24609b'
        }
      },
      y: {
        display: false,
        suggestedMin: Math.min(Math.round(d1.map((d)=> d.main.temp)) - 5) ,
        suggestedMax: Math.max(Math.round(d1.map((d)=> d.main.temp)) + 5) ,
      },
    },
  };

  const data = {
    labels: d1.map((d) => {
      const date = new Date(d.dt_txt);
      return date.toLocaleString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h24",
      });
    }),
    datasets: [
      {
        data: d1.map((d) => d.main.temp),
        borderColor: "#6996c2",
        backgroundColor: "#fff",
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 6,
        pointBorderColor: "#cae4ff",
      },
    ],
  };

  return (
    <div className="flex flex-col flex-nowrap gap-7 p-5 bg-white/[0.4] rounded-xl">
      <p className="font-medium text-lg">Temperature for 12 hours</p>
      <Line className="w-[300] -mx-1" options={options} data={data} />
    </div>
  );
}

export default Chart;
