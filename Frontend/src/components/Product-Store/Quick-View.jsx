import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/Redux/cartSlice.js";
import CartAdded from "../modals/CartAdded.jsx";

export default function QuickView({ open, setOpen, product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Extract available sizes from the response
  const sizes = [product.size1, product.size2, product.size3, product.size4].filter(
    (size) => size // Filter out empty sizes
  );

  return (
    <>
      {/* Quick View Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        {/* Dialog box */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Dialog.Panel className="relative bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full p-8">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="flex flex-col lg:flex-row gap-4">
                {/* Product Image */}
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                  {/* Product Name */}
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>

                  {/* Product Price */}
                  <p className="text-lg font-medium text-gray-900 mb-4">₹{product.price}</p>

                  {/* Available Sizes */}
                  {sizes.length > 0 ? (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700">Available Sizes:</p>
                      <div className="mt-2 flex flex-col gap-2">
                        {sizes.map((size, index) => (
                          <label key={index} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedSize === size}
                              onChange={() => setSelectedSize(size)}
                              className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded"
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
                  <button
                    className={`
                      px-4 py-2 rounded-full 
                      flex items-center gap-2 
                      text-slate-500
                      shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                      transition-all
                      hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3)]
                      hover:text-violet-500
                      focus:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3)]
                      focus:text-violet-500
                      active:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3)]
                      active:text-violet-500
                    `}
                    onClick={() => {
                      if (!selectedSize) {
                        alert("Please select a size before adding to cart.");
                        return;
                      }
                      dispatch(
                        addItem({
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          price: product.price,
                          quantity: 1,
                          size: selectedSize,
                        })
                      );
                      setModalOpen(true); // Open modal after adding item
                    }}
                  >
                    <CiShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      {/* Cart Added Modal */}
      {modalOpen && <CartAdded open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
