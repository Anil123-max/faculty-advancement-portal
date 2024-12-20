import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const performanceData = [
  { month: "Jan", appraisals: 45, research: 28, events: 12 },
  { month: "Feb", appraisals: 52, research: 32, events: 15 },
  { month: "Mar", appraisals: 48, research: 35, events: 18 },
  { month: "Apr", appraisals: 55, research: 30, events: 20 },
  { month: "May", appraisals: 50, research: 38, events: 22 },
  { month: "Jun", appraisals: 58, research: 42, events: 25 },
];

export const AdminCharts = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Faculty Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]" config={{}}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="appraisals"
                stroke="#8BA888"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="research"
                stroke="#E07A5F"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="events"
                stroke="#3D405B"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]" config={{}}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appraisals" fill="#8BA888" />
              <Bar dataKey="research" fill="#E07A5F" />
              <Bar dataKey="events" fill="#3D405B" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};