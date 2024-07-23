import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const OrderHistory = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mt-32 mb-4" style={{ fontSize: '2.15rem' }}>Order history</h1>

      <div className="flex justify-end items-center mt-8 mb-4">
        <label className="mr-2">View history from:</label>
        <Select>
          <SelectTrigger className="w-40 p-2 border rounded">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recent Order</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto mb-80">
        <Table>
          <TableCaption>Order history details</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>SHIP TO</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>ORDER NUMBER</TableHead>
              <TableHead>COST</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>4567 Junakwood Farms, New Brunswick</TableCell>
              <TableCell>June 11, 2024</TableCell>
              <TableCell>1022 - 1082 - 873</TableCell>
              <TableCell>₱699.99</TableCell>
              <TableCell className="text-blue-500 cursor-pointer"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4567 Junakwood Farms, New Brunswick</TableCell>
              <TableCell>June 1, 2024</TableCell>
              <TableCell>1022 - 1082 - 973</TableCell>
              <TableCell>₱699.99</TableCell>
              <TableCell className="text-blue-500 cursor-pointer"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderHistory;
