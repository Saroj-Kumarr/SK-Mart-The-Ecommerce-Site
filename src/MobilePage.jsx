import React from "react";
import { Mobiles } from "./DataSet";
import CardFirst from "./CardFirst";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobilePage() {
  const [searchText, setSearchText] = useState("");

  const [mobileData, setMobileData] = useState(Mobiles);

  function firteredMobiles(searchText, mobileData) {
    const filteredData = mobileData.filter((obj) => {
      let valuesArray = Object.values(obj);
      let outputValue = "";

      for (let value of valuesArray) {
        if (value == searchText) {
          outputValue = obj;
        }
      }
      return outputValue;
    });

    return filteredData;
  }

  return (
    <>
      <div className="flex tracking-wider justify-center text-yellow-500 items-center mt-72">
        <label className="test p-2 font-bold bg-black" htmlFor="browser">
          Filter Products by :{" "}
        </label>
        <input
          className="focus:outline-2 test focus:outline-blue-500 p-2 font-bold text-center  text-black placeholder:text-black bg-yellow-400 w-36"
          list="mobiles"
          name="browser"
          id="browser"
          placeholder="Select here..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <datalist id="mobiles">
          <option value="4 GB" />
          <option value="8 GB" />
          <option value="64 GB" />
          <option value="128 GB" />
          <option value="12 MP" />
          <option value="64 MP" />
          <option value="Above 50000" />
          <option value="Above 4.6" />
          <option value="Snapdragon" />
          <option value="Exynos" />
        </datalist>

        <input
          className=" test bg-black p-2 font-bold text-center"
          type="submit"
          value="Search"
          onClick={() => {
            const data = firteredMobiles(searchText, mobileData);
            setMobileData(data);
          }}
        ></input>
      </div>

      <div className="flex flex-wrap my-4 ml-20">
        {mobileData.map(({ id, title, rating, price, image }) => {
          return (
            <Link to={id} key={id}>
              <CardFirst
                title={title}
                rating={rating}
                price={price}
                image={image}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default MobilePage;
