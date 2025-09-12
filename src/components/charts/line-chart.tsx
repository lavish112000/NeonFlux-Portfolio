'use client';

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { name: 'Week 1', value: 20 },
  { name: 'Week 2', value: 45 },
  { name: 'Week 3', value: 30 },
  { name: 'Week 4', value: 60 },
  { name: 'Week 5', value: 50 },
  { name: 'Week 6', value: 80 },
];

export default function LineChartComponent() {
  return (
    <div className='p-4 rounded-lg glassmorphism h-64'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='hsl(var(--border) / 0.5)'
          />
          <XAxis
            dataKey='name'
            stroke='hsl(var(--muted-foreground))'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='hsl(var(--muted-foreground))'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{
              stroke: 'hsl(var(--accent) / 0.5)',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }}
            contentStyle={{
              backgroundColor: 'hsl(var(--background) / 0.8)',
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))',
            }}
          />
          <Line
            type='monotone'
            dataKey='value'
            stroke='hsl(var(--accent))'
            strokeWidth={2}
            dot={{ r: 4, fill: 'hsl(var(--accent))' }}
            activeDot={{
              r: 8,
              style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
