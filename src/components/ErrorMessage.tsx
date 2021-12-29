import React from "react";

export default function ErrorMessage() {
  return (
    <div
      data-testid="error"
      className="container p-2 bg-red-500 text-white rounded "
    >
      An error occurred while receiving the Data.
    </div>
  );
}
