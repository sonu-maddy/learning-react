import React, { useState } from 'react';

export default function ItemDetails() {
  const [item, setItem] = useState({
    orderStatus: "Active",
    itemName: "Pizza",
    itemPreTime: "50"
  });

  const updateOrderStatus = () => {
    setItem(prev => ({ ...prev, orderStatus: "Delivered" }));
  };

  const toggleOrderStatus = () => {
    setItem(prev => ({
      ...prev,
      orderStatus: prev.orderStatus === "Active" ? "Delivered" : "Active"
    }));
  };
  

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order Status: {item.orderStatus}</p>
      <p>Item Name: {item.itemName}</p>
      <p>Item Prepare Time: {item.itemPreTime} mins</p>
      <button onClick={updateOrderStatus}>Mark as Delivered</button>
      <button onClick={toggleOrderStatus}>
        {item.orderStatus === "Active" ? "Mark as Delivered" : "Mark as Active"}
      </button>
    </div>
  );
}
