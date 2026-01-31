import React from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

const ProductCard = ({
  product,
  onDelete,
  onTogglePublish,
  onEdit
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 p-5 w-full max-w-sm">

      {/* IMAGE SECTION */}
      <div className="h-44 bg-gray-50 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-gray-400 text-sm">
            No Image
          </span>
        )}
      </div>

      {/* TITLE */}
      <div className="mb-4">
        <h4 className="font-semibold text-base text-gray-900">
          {product.name}
        </h4>
      </div>

      {/* DETAILS */}
      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-500">Product type</span>
          <span className="text-gray-800 font-medium">{product.type}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Quantity Stock</span>
          <span className="text-gray-800 font-medium">{product.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">MRP</span>
          <span className="text-gray-800 font-medium">₹ {product.mrp}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Selling Price</span>
          <span className="text-gray-800 font-medium">₹ {product.sellingPrice}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Brand Name</span>
          <span className="text-gray-800 font-medium">{product.brand}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Exchange Eligibility</span>
          <span className="text-gray-800 font-medium">{product.exchange}</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-3 mt-6">

        {/* Publish / Unpublish */}
        <Button
          onClick={() => onTogglePublish(product._id)}
          className={`text-xs px-4 py-2 rounded-lg ${
            product.isPublished
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {product.isPublished ? "Unpublish" : "Publish"}
        </Button>

        {/* Edit */}
        <Button
          variant="outline"
          className="text-xs px-4 py-2 rounded-lg border-gray-300"
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>

        {/* Delete */}
        <Button
          variant="outline"
          onClick={() => onDelete(product._id)}
          className="text-xs p-2 rounded-lg border-gray-300"
        >
          <Trash2 size={14} />
        </Button>

      </div>
    </div>
  )
}

export default ProductCard
