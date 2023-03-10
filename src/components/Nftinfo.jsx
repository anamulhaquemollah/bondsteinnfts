import React from "react";

import growth from "../assets/images/nftinfo/growth.png";
import fast from "../assets/images/nftinfo/fast.png";

const Nftinfo = () => {
  return (
    <div className="flex justify-between gap-7 bg-gray-100 default-padding py-20 mt-[200px]">
      <h2>The amazing NFT art of the world here</h2>
      <div className="flex items-start gap-4">
        <img src={fast} alt="" />
        <div>
          <h3>Fast Transaction</h3>
          <p className="text-sm text-gray-600 w-60 pt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            asperiores.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <img src={growth} alt="" />
        <div>
          <h3>Growth Transaction</h3>
          <p className="text-sm text-gray-600 w-60 pt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nftinfo;
