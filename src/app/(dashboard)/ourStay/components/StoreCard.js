// StoreCard.js
import React from "react";
import Image from "next/image";

export default function StoreCard({ store }) {
  const handlePagePartnerStore = (id) => {
    router.push(`/partner/store/${id}`);
  };

  return (
    <div className="out_stay_container" key={store.id}>
      <div className="w-full">
        <Image
          src={store?.imageUrl}
          alt={store?.imageName}
          width={370}
          height={230}
          className="w-full md:h-[250px] object-cover"
          // style={{ width: "370px", height: "230px" }}
        />
      </div>
      <div className="flex py-6 md:py-10">
        <div className="our_stay_content_container">
          <div className="">
            <div style={{ fontSize: "18px", fontWeight: "800" }}>
              {store?.storeName}
            </div>
            <div style={{ fontSize: "12px", fontWeight: "300" }}>
              {store?.address}
            </div>
          </div>

          <button
            className="md:w-[100px] md:h-[29px] px-2 justify-center  flex items-center border rounded-full hover:bg-[#203d1e] hover:text-white transition-all duration-300"
            id={store.id}
            onClick={handlePagePartnerStore}
          >
            둘러보기 →
          </button>
        </div>
      </div>
    </div>
  );
}
