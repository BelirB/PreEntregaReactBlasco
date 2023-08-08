import React from "react";
import './style.css'

export default function ItemsListContainer({greeting}) {
  return (
    <div className="bodyx">
      <h1>{greeting}</h1>
    </div>
  );
}
