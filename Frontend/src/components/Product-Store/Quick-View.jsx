import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiShoppingCart } from "react-icons/ci";
import { MdWarning } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addItem } from "../cart/Redux/cartSlice.js";
import CartAdded from "../modals/CartAdded.jsx";

export default function QuickView({ open, setOpen, product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const sizes = [product.size1, product.size2, product.size3, product.size4].filter((size) => size);

  const isOutOfStock = product.stock <= 0;

  return (
    <>
      {/* Quick View Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        {/* Dialog Box */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="flex flex-col lg:flex-row gap-4">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:w-1/2 flex justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md shadow-lg"
                  />
                </motion.div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-lg font-medium text-gray-900 mb-4">₹{product.price}</p>

                  {/* Stock Status */}
                  <div className="flex items-center mb-4">
                    {isOutOfStock ? (
                      <div className="flex items-center text-red-600 font-semibold">
                        <MdWarning className="h-5 w-5 mr-2" />
                        <span>Out of Stock</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-600 font-semibold">
                        <AiOutlineCheckCircle className="h-5 w-5 mr-2" />
                        <span>In Stock</span>
                      </div>
                    )}
                  </div>

                  {sizes.length > 0 ? (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700">Available Sizes:</p>
                      <div className="mt-2 flex flex-col gap-2">
                        {sizes.map((size, index) => (
                          <label key={index} className="inline-flex items-center">
                            <input
                              type="radio"
                              name="size"
                              value={size}
                              checked={selectedSize === size}
                              onChange={() => setSelectedSize(size)}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-gray-700">{size}</span>
                          </label>
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Selected Size: {selectedSize}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 mb-4">No sizes available</p>
                  )}

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isOutOfStock}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 
                      ${isOutOfStock ? "bg-gray-300 text-gray-500 cursor-not-allowed" : 
                      "bg-indigo-600 text-white hover:bg-indigo-700"} 
                      transition-all shadow-md`}
                    onClick={() => {
                      if (!selectedSize) {
                        alert("Please select a size before adding to cart.");
                        return;
                      }
                      dispatch(
                        addItem({
                          id: product._id,
                          name: product.name,
                          image: product.image,
                          price: product.price,
                          quantity: 1,
                          size: selectedSize,
                        })
                      );
                      setModalOpen(true);
                    }}
                  >
                    <CiShoppingCart />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Dialog>

      {/* Cart Added Modal */}
      {modalOpen && <CartAdded open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
