import "../../components/chart/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  YAxis,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  console.log('dataKey', dataKey);
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} width={730} height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="thang" stroke="#5550bd" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
