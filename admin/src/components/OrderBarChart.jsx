"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Bar, CartesianGrid, BarChart as ReBarChart, XAxis } from "recharts";

export function OrderBarChart({ ordersData = [] }) {
  const chartConfig = {
    amount: {
      label: "Amount",
      color: "var(--chart-1)",
    },
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border p-2 rounded shadow">
          <p className="font-medium">{data.date}</p>
          <p>Price: ${data.amount}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className={"text-lg"}>Order Amount Overview</CardTitle>
        <CardDescription>Recent Orders by Date</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <ReBarChart
            data={ordersData}
            barSize={50}
            margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="hidden lg:block"
            />
            <ChartTooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            <Bar
              dataKey="amount"
              fill="var(--color-amount)"
              radius={[8, 8, 0, 0]}
            />
          </ReBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
