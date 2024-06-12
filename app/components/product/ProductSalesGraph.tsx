import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  unitsSold: number;
  retailerMargin: number;
  wholesaleSales: number;
}

const groupSalesByMonth = (sales: SalesData[]): SalesData[] => {
  const salesByMonth: Record<string, SalesData> = {};

  sales.forEach(item => {
    const month = item.weekEnding.substring(0, 7);
    if (salesByMonth[month]) {
      const currentMonthData = salesByMonth[month];
      currentMonthData.retailSales += item.retailSales;
      currentMonthData.wholesaleSales += item.wholesaleSales;
      currentMonthData.unitsSold += item.unitsSold;
      currentMonthData.retailerMargin += item.retailerMargin;
      return;
    }
    salesByMonth[month] = { ...item, weekEnding: month + '-01' };
  });

  return Object.values(salesByMonth);
};

const formatMonth = (month: string): string => {
  const date = new Date(month);
  return date.toLocaleDateString(undefined, { month: 'short'});
};

export const ProductSalesGraph = ({ sales }: any) => {
  if(sales.length === 0) {
    return null;
  }
  const salesByMonth = groupSalesByMonth(sales);

  return (
    <ResponsiveContainer width="100%" height={550}>
      <LineChart  data={salesByMonth}>
        <XAxis dataKey="weekEnding" tickFormatter={formatMonth} minTickGap={50} />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#43a7f6" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#666" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProductSalesGraph;
