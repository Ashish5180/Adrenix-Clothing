import { useState, useEffect } from 'react'
import QuickView from './Quick-View' // Import your QuickView component
import axios from 'axios'

export default function Products() {
  const [products, setProducts] = useState([]) // State to store products
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products') // Replace with your API endpoint
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-9 lg:max-w-7xl lg:px-8">
        

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product._id} // Use `_id` if MongoDB is used
              className="group relative"
              onClick={() => handleProductClick(product)} // Handle product click
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt || product.name} // Fallback to name if imageAlt is not provided
                  src={product.image} // Assuming `imageSrc` is provided in the API response
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color || 'N/A'}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render QuickView with dynamic product data */}
      {selectedProduct && (
        <QuickView
          open={isQuickViewOpen}
          setOpen={setIsQuickViewOpen}
          product={selectedProduct} // Pass the selected product
        />
      )}
    </div>
  )
}
