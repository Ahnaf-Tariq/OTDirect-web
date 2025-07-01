import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Properties from "../../assets/assets";
import TitleProperty from "./TitleProperty";
import ImagePriceProperty from "./ImagePriceProperty";
import DescriptionProperty from "./DescriptionProperty";
import ErrorPage from "../ErrorPage";

const PropertyPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = Properties.find((item) => item._id === id);
    setProductData(product);
    console.log(product);
  }, []);
  return productData ? (
    <div className="max-w-[1500px] mx-auto my-10">
      <TitleProperty productData={productData} />

      <hr className="text-gray-400 my-4" />

      <ImagePriceProperty productData={productData} />

      <DescriptionProperty productData={productData} />
    </div>
  ) : (
    <div>
      <ErrorPage />
    </div>
  );
};

export default PropertyPage;
