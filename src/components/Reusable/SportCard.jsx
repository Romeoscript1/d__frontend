import React from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

const SportCard = ({ data, isDiscover }) => {
  console.log(data.title);

  return (
    <div
      className="flex justify-between border-b-2 py-4  gap-3 border-[gray] last:border-b-0 flex-wrap"
      key={data.id}
    >
      <div className="flex gap-4 items-center flex-wrap">
        {isDiscover ? (
          <article
            className={`flex gap-2 items-center ${
              isDiscover
                ? data.isDifferentColor
                  ? "bg-orange-500"
                  : "bg-blue-600"
                : ""
            } p-1`}
          >
            <SportsVolleyballIcon />
            <p>
              <h4 className="font-bold">
                {isDiscover ? (data.isDifferentColor ? "NBA" : "NFL") : ""}
              </h4>
              <p>FULL RESULTS</p>
            </p>
          </article>
        ) : (
          ""
        )}
        <article className=" text-blue-600 font-semibold">
          <h3>{data.title}</h3>
        </article>
      </div>
      <div className="flex gap-8 items-center">
        <article>
          <p className="text-black">
            {data.valueString} of{" "}
            {isDiscover
              ? data.isDifferentColor
                ? "39,067"
                : "238,095"
              : data.maxValueString}
          </p>
          <p className="text-center">
            <progress
              value={data.value}
              max={
                isDiscover
                  ? data.isDifferentColor
                    ? 39067
                    : 238095
                  : data.maxValue
              }
            ></progress>
          </p>
        </article>
        <article>
          <h4 className="text-green-500 font-semibold">
            $
            {isDiscover
              ? data.isDifferentColor
                ? "300,000"
                : "1,000,000"
              : data.price}
          </h4>
        </article>
        <button
          type="button"
          className="text-blue-400 outline outline-1 outline-blue p-2 text-[12px] w-28 hover:bg-blue-600 hover:text-white  "
        >
          ${isDiscover ? (data.isDifferentColor ? "9" : "5") : data.entryFee}{" "}
          Entry
        </button>
      </div>
    </div>
  );
};

export default SportCard;
