import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

export default function CartWidget() {
  const contador=1;  
  return (
    <div className="carro">
      <i>
        <FontAwesomeIcon icon={faCartShopping} />
      </i>
      <p>{contador}</p>
    </div>
  );
}