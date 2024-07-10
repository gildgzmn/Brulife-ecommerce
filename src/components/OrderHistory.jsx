import React from 'react';

const OrderHistory = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mt-32 mb-4" style={{fontSize: '2.15rem'}}>Order history</h1>

      <div className="flex justify-end mt-8 mb-4">
        <label className="mr-2">View history from:</label>
        <select className="p-2 border rounded">
          <option>Recent Order</option>
          <option>Past Month</option>
          <option>Past Year</option>
        </select>
      </div>

      <div className="overflow-x-auto mb-80">
        <table className="min-w-full text-center bg-white shadow-md border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">SHIP TO</th>
              <th className="py-2 px-4 border-b">DATE</th>
              <th className="py-2 px-4 border-b">ORDER NUMBER</th>
              <th className="py-2 px-4 border-b">COST</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 border-b">4567 Junakwood Farms, New Brunswick</td>
              <td className="py-4 px-6 border-b">June 11, 2024</td>
              <td className="py-4 px-6 border-b">1022 - 1082 - 873</td>
              <td className="py-4 px-6 border-b">₱699.99</td>
              <td className="py-4 px-6 border-b text-blue-500 cursor-pointer"></td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b">4567 Junakwood Farms, New Brunswick</td>
              <td className="py-4 px-6 border-b">June 1, 2024</td>
              <td className="py-4 px-6 border-b">1022 - 1082 - 973</td>
              <td className="py-4 px-6 border-b">₱699.99</td>
              <td className="py-4 px-6 border-b text-blue-500 cursor-pointer"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
