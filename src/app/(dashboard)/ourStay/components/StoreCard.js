// StoreCard.js
import React from "react";
import Image from "next/image";

export default function StoreCard({ store }) {
  const handlePagePartnerStore = (id) => {
    router.push(`/partner/store/${id}`);
  };

  return (
    <div className="out_stay_container">
      <div style={{ width: "370px", height: "230px" }}>
        <Image
          src={store.imageUrl}
          alt={store.imageName}
          width={370}
          height={230}
        />
      </div>
      <div style={{ display: "flex", marginTop: "45px" }}>
        <div className="our_stay_content_container">
          <div>
            <div style={{ fontSize: "18px", fontWeight: "700" }}>
              {store.storeName}
            </div>
            <div style={{ fontSize: "12px", fontWeight: "300" }}>
              {store.address}
            </div>
          </div>

          <button
            className="our_stay_content_btn"
            onClick={() => handlePagePartnerStore(store.id)}
          >
            둘러보기
          </button>
        </div>
      </div>
    </div>
  );
}
