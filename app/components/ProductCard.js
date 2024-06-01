import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-md overflow-hidden h-[450px] flex flex-col">
      <div className="relative h-[70%] p-4 overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.1,
            rotateZ: 2.5,
          }}
          src={product.image}
          alt={product.title}
          className=" h-full w-full object-contain mix-blend-multiply"
        />
      </div>
      <div className="p-4 text-gray-700">
        <h3 className="font-bold text-sm lg:text-md mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.title}
        </h3>
        <p className="flex text-sm items-center justify-between">
          <span> Rating: {product.rating.rate} / 5</span>
          <span> Rated by: {product.rating.count}</span>
        </p>
        <p className="font-semibold rounded-md bg-[#7851A9] text-[#eaeaea] mt-2 flex items-center w-fit p-2">&#x20B9; {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
