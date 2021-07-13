import "../../components/chart/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Legend,
} from "recharts";

export default function Chart2({ title, data, dataKey, grid }) {
 
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ten"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="soTien" stroke="#8884d8" />
            <Line type="monotone" dataKey="soLuong" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
