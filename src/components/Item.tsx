import React from "react";
import NoImage from "./NoImage";

interface ItemProps {
  title: string;
  department: string;
  primaryImage: string;
}

export default function Item({ primaryImage, title, department }: ItemProps) {
  return (
    <div className="w-100 lg:w-1/4 md:w-1/4 sm:w-1/2 p-4">
      <div className="container flex flex-col bg-white shadow-md rounded-md cursor-pointer">
        {primaryImage === "" ? (
          <NoImage title={title} />
        ) : (
          <img src={primaryImage} alt={title} className="w-full rounded-t-md" />
        )}

        <h3 className="m-2 text-lg font-bold">{title}</h3>

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
