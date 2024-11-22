import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUserCircle, FaClock } from "react-icons/fa";
import axios from "axios";

function Inbox() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Your Orders
      </h1>
      <div className="grid gap-6">
        {orders.map((order) => (
          <motion.div
            key={order._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="bg-white shadow-xl rounded-xl p-5 flex flex-col gap-4 hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <FaUserCircle className="text-5xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  {order.userName}
                </h2>
                <p className="text-md font-medium text-gray-700">
                  Payment Method: {order.paymentMethod}
                </p>
                <p className="text-sm text-gray-500">Address: {order.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Products:
              </h3>
              <ul className="space-y-4">
                {order.products.map((product) => (
                  <li key={product._id} className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-md"
                    />
                    <div>
                      <p className="text-md font-medium text-gray-800">
                        {product.name} ({product.size})
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: ₹{product.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Total Amount: ₹{order.totalAmount}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <FaClock className="text-gray-400" />
              <span className="text-xs text-gray-400">
                Order Status: {order.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
