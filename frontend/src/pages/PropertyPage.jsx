import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Properties from "../assets/assets";

const PropertyPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = Properties.find(item => item._id === id)
    setProductData(product)
    console.log(product);
  }, []);
  return productData ? (
    <div>
      <div className="max-w-[1450px] mx-auto px-4 py-6">
      <img
        src={productData.image}
        alt={productData.title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{productData.title}</h1>
      <p className="text-lg text-gray-700 mb-2">Address: {productData.address}</p>
      <p className="text-lg text-gray-700 mb-2">Type: {productData.type}</p>
      <p className="text-lg text-gray-700 mb-2">Size: {productData.squareYard}</p>
      <p className="text-xl text-[#7A1233] font-semibold">Price: Rs {productData.price}</p>
      <p className="mt-4 text-sm text-gray-500">Posted: {productData.time}</p>
    </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PropertyPage;
