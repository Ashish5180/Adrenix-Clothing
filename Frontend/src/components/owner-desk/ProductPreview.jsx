import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTag, FaRuler, FaPalette, FaDollarSign, FaWarehouse } from 'react-icons/fa';

function ProductPreview() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl w-full max-w-md"
          >
            <div className="relative">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain bg-gray-200"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold"
              >
                View Product
              </motion.div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <FaRuler className="mr-2 text-gray-500" />
                <p className="text-sm">
                  Size: <span className="font-medium">{`${product.size1}, ${product.size2}, ${product.size3}, ${product.size4}`}</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaPalette className="mr-2 text-gray-500" />
                <p className="text-sm">
                  Color: <span className="font-medium">{product.color}</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaDollarSign className="mr-2 text-gray-500" />
                <p className="text-sm">
                  Price: <span className="font-medium">${product.price}</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FaWarehouse className="mr-2 text-gray-500" />
                <p className="text-sm">
                  Stock:{" "}
                  <span
                    className={`font-medium ${
                      product.stock > 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {product.stock > 0 ? 'In Stock'  : 'Out of Stock'}
                  </span>
                </p>
              </div>
              <button
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  product.stock > 0
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? 'Buy Now' : 'Out of Stock'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductPreview;
