import { useState } from "react"

const Hero = () => {
  const [activeTab, setActiveTab] = useState("published")

  return (
    <div className="flex flex-col w-full">

      <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
        <h2 className="text-sm font-medium text-gray-700">
          Products
        </h2>
      </div>

      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex space-x-6 text-sm">
          <button
            onClick={() => setActiveTab("published")}
            className={`py-3 border-b-2 ${
              activeTab === "published"
                ? "border-[#173A8A] text-[#173A8A] font-medium"
                : "border-transparent text-gray-400"
            }`}
          >
            Published
          </button>

          <button
            onClick={() => setActiveTab("unpublished")}
            className={`py-3 border-b-2 ${
              activeTab === "unpublished"
                ? "border-[#173A8A] text-[#173A8A] font-medium"
                : "border-transparent text-gray-400"
            }`}
          >
            Unpublished
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
