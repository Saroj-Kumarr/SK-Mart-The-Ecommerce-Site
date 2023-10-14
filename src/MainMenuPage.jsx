import { useEffect } from "react";
import { useParams } from "react-router";
import { Mobiles } from "./DataSet";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector } from "react-redux";
import { store } from "./Store";

import React from "react";


function MainMenuPage() {
  const { resid } = useParams();

  const [mobileData, setMobileData] = useState([]);

  async function fetchProductData(resid) {
    const data = await fetch("https://dummyjson.com/products/" + resid);

    const modifiedData = await data.json();

    setMobileData(modifiedData.products);
  }

  useEffect(() => {
    fetchProductData(resid);
  }, []);

  return (
    <div className="flex h-[78vh] justify-center items-center mt-32 relative top-2 ">
      {mobileData != 0 && <div>
        {resid}
        </div>}
    </div>
  );
}

export default MainMenuPage;
