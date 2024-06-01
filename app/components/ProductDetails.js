import { motion } from "framer-motion";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#10101090] "
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-[640px] w-[95%] max-h-[80vh] h-full md:h-[80%] bg-zinc-200 relative rounded-2xl overflow-hidden p-1.5 flex flex-col">
        <div className="top-0 right-0 flex items-center justify-end z-50 h-[5%]">
          <button onClick={onClose} className="p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#101010"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="h-[45%] md:h-[50%] p-8">
          <motion.img
            src={product.image}
            className=" h-full w-full object-contain mix-blend-multiply"
          />
        </div>
        <div className="text-zinc-700 h-[50%] md:h-[45%] flex flex-col justify-center text-sm lg:text-lg *:py-1 *:px-4 *:md:px-8">
          <h1 className=" font-bold">{product.title}</h1>
          <p className=" text-sm lg:text-md">{product.description}</p>
          <p className="text-md lg:text-2xl">&#x20B9; {product.price}</p>
          <p className="flex text-sm items-center gap-[2.5ch]">
            <span> Rating: {product.rating.rate} / 5</span>
            <span> Rated by: {product.rating.count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
