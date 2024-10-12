// pages/orders/Orders.jsx
import React from "react";

const Orders = () => {
  // Sample order data (replace this with your actual data fetching logic)
  const orders = [
    { id: 1, product: "Game 1", price: "$20", status: "Shipped" },
    { id: 2, product: "Game 2", price: "$30", status: "Pending" },
    { id: 3, product: "Game 3", price: "$25", status: "Delivered" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-left">Order ID</th>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">{order.id}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.product}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.price}</td>
              <td className="py-3 px-4 border-b border-gray-200">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
