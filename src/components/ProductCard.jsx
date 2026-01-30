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
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4">

      {/* IMAGE SECTION */}
      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
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
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-sm text-gray-800">
          {product.name}
        </h4>
        <span className="text-xs text-gray-400">
          {product.type}
        </span>
      </div>

      {/* DETAILS */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>
          Quantity Stock : <span className="text-gray-700">{product.quantity}</span>
        </p>
        <p>
          MRP : <span className="text-gray-700">₹ {product.mrp}</span>
        </p>
        <p>
          Selling Price : <span className="text-gray-700">₹ {product.sellingPrice}</span>
        </p>
        <p>
          Brand Name : <span className="text-gray-700">{product.brand}</span>
        </p>
        <p>
          Exchange Eligibility :{" "}
          <span className="text-gray-700">{product.exchange}</span>
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-2 mt-4">

        {/* Publish / Unpublish */}
        <Button
          onClick={() => onTogglePublish(product._id)}
          className={
            product.isPublished
              ? "bg-green-500 hover:bg-green-600 text-white text-xs"
              : "bg-blue-600 hover:bg-blue-700 text-white text-xs"
          }
        >
          {product.isPublished ? "Unpublish" : "Publish"}
        </Button>

        {/* Edit */}
        <Button
            variant="outline"
            className="text-xs"
            onClick={() => onEdit(product)}
            >
          Edit
         </Button>

        
        
        
        
        

        {/* Delete */}
        <Button
          variant="outline"
          onClick={() => onDelete(product._id)}
          className="text-xs"
        >
          <Trash2 size={14} />
        </Button>

      </div>

    </div>
  )
}

export default ProductCard
