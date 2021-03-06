import React from "react";
import NoImage from "./NoImage";
import "./item.css";

interface ItemProps {
  title: string;
  department: string;
  primaryImage: string;
}

export default function Item({ primaryImage, title, department }: ItemProps) {
  return (
    <div
      data-testid="item"
      className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 p-4"
    >
      <div className="container flex flex-col bg-white shadow-md rounded-md cursor-pointer">
        {primaryImage === "" ? (
          <NoImage title={title} />
        ) : (
          <img
            src={primaryImage}
            alt={title}
            className="w-full rounded-t-md image"
          />
        )}

        <h3 className="m-2 text-lg font-bold">
          {title.substring(0, 30)}
          {title.length > 30 ? "..." : ""}
        </h3>

        <div className="flex flex-row flex-wrap mx-2 mb-2">
          <span className="w-1/3 text-sm">Department:</span>
          <span className="w-2/3 text-sm font-bold text-right">
            {department}
          </span>
        </div>
      </div>
    </div>
  );
}
