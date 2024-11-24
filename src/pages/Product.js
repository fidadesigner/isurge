import React from "react";
import ProductBanner from "../components/ProductBanner/ProductBanner";
import CompareProducts from "../components/CompareProducts/CompareProducts";
import ImportantNote from "../components/ImportantNote/ImportantNote";
import IsurgevCiso from "../components/Isurge_v_Ciso/Isurge_v_Ciso";
import SeeComparison from "../components/SeeComparison/SeeComparison";

function Product() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <> 
            <div className="bg-custom-gradient" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <ProductBanner />
            </div>
            <CompareProducts />
            <ImportantNote />
            <IsurgevCiso />
            <SeeComparison />
        </>
    );
}

export default Product;