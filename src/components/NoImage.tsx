import React from "react";
import "./noImage.css";

interface NoImageProps {
  title: string;
}

export default function NoImage({ title }: NoImageProps) {
  return (
    <div className="bg-gray-200  flex justify-center items-center noimage">
      <span className="text-lg font-bold text-slate-400">
        {title.substring(0, 2).toUpperCase()}
      </span>
    </div>
  );
}
