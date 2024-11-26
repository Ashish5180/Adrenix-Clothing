import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';

function CreateProducts() {
  const [productData, setProductData] = useState({
    name: '',
    size1: '',
    size2: '',
    size3: '',
    size4: '',
    color: '',
    stock: '',
    price: '',
  });

  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('image', image);
    formData.append('size1', productData.size1);
    formData.append('size2', productData.size2);
    formData.append('size3', productData.size3);
    formData.append('size4', productData.size4);
    formData.append('color', productData.color);
    formData.append('stock', productData.stock);
    formData.append('price', productData.price);

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Product created successfully!');
      setErrorMessage('');
      setProductData({ name: '', size1: '', size2: '', size3: '', size4: '', color: '', stock: '', price: '' });
      setImage(null);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to create the product. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl font-bold text-gray-800 text-center mb-6"
        >
          <FaPlusCircle className="inline-block text-blue-500 mr-2" size={32} />
          Create New Product
        </motion.h2>

        {successMessage && <p className="text-green-600 font-semibold mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 font-semibold mb-4">{errorMessage}</p>}

        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInput}
              placeholder="Enter product name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              required
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <div className="flex items-center mt-2">
              <FaCamera className="text-blue-500 mr-2" size={24} />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                required
              />
            </div>
          </div>

          {/* Product Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Available Sizes</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="size1"
                  value={productData.size1}
                  onChange={handleInput}
                  placeholder="Enter size S"
                  className="h-10 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="size2"
                  value={productData.size2}
                  onChange={handleInput}
                  placeholder="Enter size M"
                  className="h-10 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="size3"
                  value={productData.size3}
                  onChange={handleInput}
                  placeholder="Enter size L"
                  className="h-10 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="size4"
                  value={productData.size4}
                  onChange={handleInput}
                  placeholder="Enter size XL"
                  className="h-10 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Product Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="color"
              value={productData.color}
              onChange={handleInput}
              placeholder="Enter product color"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              required
            />
          </div>

          {/* Product Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Stock</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="stock"
              value={productData.stock}
              onChange={handleInput}
              placeholder="Enter product color"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              required
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInput}
              placeholder="Enter product price"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg shadow-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Add Product
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default CreateProducts;
