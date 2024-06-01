import React from "react";

export default function Header() {
  return (
    <div className="p-4 md:p-8 h-[80vh]">
      <div
        className=" h-full w-full text-[#eaeaea] p-4 flex flex-col justify-center gap-4 relative overflow-hidden"
        style={{
          borderImage:
            "linear-gradient(hsl(240 100% 20% / 0.6), hsl(0 100% 20% / 0.6)) fill 1;",
          background:
            "url(" + "/images/person-shops-in-a-clothing-store.jpg " + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold -ml-[3px] md:-ml-[6px] z-50">
          Heading
        </h1>
        <p className="max-w-[768px] w-full text-md lg:text-lg z-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugiat
          ipsa repudiandae temporibus sint ex numquam suscipit doloremque culpa
          nemo? Impedit doloremque animi esse dolor nisi voluptatum ratione
          ducimus similique.
        </p>

        <div
          className="absolute top-0 right-0 h-full translate-x-[40px] sm:translate-x-[80px] text-[1000%] sm:text-[1500%] z-10 flex items-center justify-center opacity-40"
          style={{
            writingMode: "vertical-lr",
            background:
              "linear-gradient(hsl(100, 100%, 50%), hsl(300, 100%, 50%))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Logo
        </div>
      </div>
    </div>
  );
}
