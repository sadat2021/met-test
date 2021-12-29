import React from "react";

export default function Item() {
  return (
    <div className="w-100 lg:w-1/5 md:w-1/4 sm:w-1/2 p-4">
      <div className="container flex flex-col bg-white shadow-md rounded-md cursor-pointer">
        <img
          src="https://images.metmuseum.org/CRDImages/ad/web-large/130480.jpg"
          alt="test"
          className="w-full rounded-t-md"
        />
        <h3 className="m-2 text-lg font-bold">Andiron</h3>

        <div className="flex flex-row flex-wrap mx-2 mb-2">
          <span className="w-1/3 text-sm">Department:</span>
          <span className="w-2/3 text-sm font-bold text-right">
            The American Wing
          </span>
        </div>
      </div>
    </div>
  );
}
