import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import userData from "../../../db/data"

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={userData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#9E6EFE" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent;