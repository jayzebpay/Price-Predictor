import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { fetchData } from "../actions/fetchHistoricalData";

Chart.register(...registerables);

const GraphComponent = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setChartData(data);
      setLoading(false);
    };

    getData();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Turn off the grid lines
        },
      },
      y: {
        grid: {
          display: false, // Turn off the grid lines
        },
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Format y-axis values
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y.toLocaleString(); // Format tooltip values
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default GraphComponent;
