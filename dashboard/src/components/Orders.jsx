import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = ({ user }) => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    axios.get("http://localhost:8080/order/allOrders", {
      params: { userId: user.id },
    })
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch orders:", error);
      });
  }, [user?.id]);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
        <h3 className="title">Orders ({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
      )}
    </div>
    
  );
};

export default Orders;
