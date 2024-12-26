import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { month: "Jan", publications: 4, citations: 8, projects: 2 },
  { month: "Feb", publications: 3, citations: 12, projects: 3 },
  { month: "Mar", publications: 5, citations: 15, projects: 2 },
  { month: "Apr", publications: 2, citations: 10, projects: 4 },
  { month: "May", publications: 6, citations: 18, projects: 3 },
  { month: "Jun", publications: 4, citations: 20, projects: 5 },
];

const researchDistribution = [
  { name: "Journal Articles", value: 35 },
  { name: "Conference Papers", value: 25 },
  { name: "Book Chapters", value: 20 },
  { name: "Patents", value: 20 },
];

const COLORS = ["#8BA888", "#E07A5F", "#3D405B", "#81B29A"];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <LineChart width={500} height={300} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="publications"
                stroke="#8BA888"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="citations"
                stroke="#E07A5F"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#3D405B"
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <PieChart width={500} height={300}>
              <Pie
                data={researchDistribution}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {researchDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;