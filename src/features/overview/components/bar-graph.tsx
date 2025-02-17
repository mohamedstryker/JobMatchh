'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2025-01-01', desktop: 1, mobile: 5 },
  { date: '2025-01-02', desktop: 2, mobile: 4 },
  { date: '2025-01-03', desktop: 0, mobile: 3 },
  { date: '2025-01-04', desktop: 1, mobile: 6 },
  { date: '2025-01-05', desktop: 0, mobile: 5 },
  { date: '2025-01-06', desktop: 2, mobile: 4 },
  { date: '2025-01-07', desktop: 1, mobile: 3 },
  { date: '2025-01-08', desktop: 0, mobile: 6 },
  { date: '2025-01-09', desktop: 1, mobile: 5 },
  { date: '2025-01-10', desktop: 2, mobile: 4 },
  { date: '2025-01-11', desktop: 1, mobile: 3 },
  { date: '2025-01-12', desktop: 0, mobile: 6 },
  { date: '2025-01-13', desktop: 2, mobile: 5 },
  { date: '2025-01-14', desktop: 1, mobile: 4 },
  { date: '2025-01-15', desktop: 0, mobile: 3 },
  { date: '2025-01-16', desktop: 1, mobile: 6 },
  { date: '2025-01-17', desktop: 2, mobile: 5 },
  { date: '2025-01-18', desktop: 0, mobile: 4 },
  { date: '2025-01-19', desktop: 1, mobile: 3 },
  { date: '2025-01-20', desktop: 2, mobile: 6 },
  { date: '2025-01-21', desktop: 0, mobile: 5 },
  { date: '2025-01-22', desktop: 1, mobile: 4 },
  { date: '2025-01-23', desktop: 2, mobile: 3 },
  { date: '2025-01-24', desktop: 0, mobile: 6 },
  { date: '2025-01-25', desktop: 1, mobile: 5 },
  { date: '2025-01-26', desktop: 3, mobile: 4 },
  { date: '2025-01-27', desktop: 0, mobile: 3 },
  { date: '2025-01-28', desktop: 1, mobile: 6 },
  { date: '2025-01-29', desktop: 1, mobile: 5 },
  { date: '2025-01-30', desktop: 0, mobile: 4 },
  { date: '2025-01-31', desktop: 1, mobile: 3 },
  { date: '2025-02-01', desktop: 5, mobile: 6 },
  { date: '2025-02-02', desktop: 0, mobile: 5 },
  { date: '2025-02-03', desktop: 1, mobile: 4 },
  { date: '2025-02-04', desktop: 0, mobile: 3 },
  { date: '2025-02-05', desktop: 0, mobile: 6 },
  { date: '2025-02-06', desktop: 1, mobile: 5 },
  { date: '2025-02-07', desktop: 3, mobile: 4 },
  { date: '2025-02-08', desktop: 0, mobile: 3 },
  { date: '2025-02-09', desktop: 2, mobile: 6 },
  { date: '2025-02-10', desktop: 1, mobile: 5 },
  { date: '2025-02-11', desktop: 0, mobile: 4 },
  { date: '2025-02-12', desktop: 1, mobile: 3 },
  { date: '2025-02-13', desktop: 2, mobile: 6 },
  { date: '2025-02-14', desktop: 0, mobile: 5 },
  { date: '2025-02-15', desktop: 1, mobile: 4 },
  { date: '2025-02-16', desktop: 2, mobile: 3 },
  { date: '2025-02-17', desktop: 0, mobile: 6 },
  { date: '2025-02-18', desktop: 1, mobile: 5 },
  { date: '2025-02-19', desktop: 2, mobile: 4 },
  { date: '2025-02-20', desktop: 0, mobile: 3 },
  { date: '2025-02-21', desktop: 1, mobile: 6 },
  { date: '2025-02-22', desktop: 2, mobile: 5 },
  { date: '2025-02-23', desktop: 0, mobile: 4 },
  { date: '2025-02-24', desktop: 1, mobile: 3 },
  { date: '2025-02-25', desktop: 2, mobile: 6 },
  { date: '2025-02-26', desktop: 0, mobile: 5 },
  { date: '2025-02-27', desktop: 1, mobile: 4 },
  { date: '2025-02-28', desktop: 2, mobile: 3 },
  { date: '2025-02-29', desktop: 0, mobile: 6 },
  { date: '2025-03-01', desktop: 1, mobile: 5 },
  { date: '2025-03-02', desktop: 2, mobile: 4 },
  { date: '2025-03-03', desktop: 0, mobile: 3 },
  { date: '2025-03-04', desktop: 1, mobile: 6 },
  { date: '2025-03-05', desktop: 2, mobile: 5 },
  { date: '2025-03-06', desktop: 0, mobile: 4 },
  { date: '2025-03-07', desktop: 1, mobile: 3 },
  { date: '2025-03-08', desktop: 2, mobile: 6 },
  { date: '2025-03-09', desktop: 0, mobile: 5 },
  { date: '2025-03-10', desktop: 1, mobile: 4 },
  { date: '2025-03-11', desktop: 2, mobile: 3 },
  { date: '2025-03-12', desktop: 0, mobile: 6 },
  { date: '2025-03-13', desktop: 1, mobile: 5 },
  { date: '2025-03-14', desktop: 2, mobile: 4 }
];

const chartConfig = {
  views: {
    label: 'Job'
  },
  desktop: {
    label: 'Applied',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Viewed',
    color: 'hsl(var(--chart-2))'
  },
  error: {
    label: 'Error',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('desktop');

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0)
    }),
    []
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (activeChart === 'error') {
      throw new Error('Mocking Error');
    }
  }, [activeChart]);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Job Applications Over Time</CardTitle>
          <CardDescription>
            Showing the total job applications you viewed and applied for the last 3 months
          </CardDescription>
        </div>
        <div className='flex'>
          {['desktop', 'mobile'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            if (!chart || total[key as keyof typeof total] === 0) return null;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-xs text-muted-foreground'>
                  {chartConfig[chart].label}
                </span>
                <span className='text-lg font-bold leading-none sm:text-3xl'>
                  {total[key as keyof typeof total]?.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[280px] w-full'
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
