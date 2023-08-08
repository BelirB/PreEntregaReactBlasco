import React from "react";
import CartWidget from "../CartWidget";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";



export default function NavBar() {
  return (
    <div className="colorNav">
      <div className="gaming">
      <a href="#"><img className="armado" src="https://i.postimg.cc/CxnS1M8K/armado.png" alt="" /></a>
      <a href="#"><img className="logo" src="https://i.postimg.cc/Nf5ZBJh8/logo.png" alt="" /></a>
      </div>
      <ul className="navList">
      <a href="#"><li>PC armadas</li></a>
      <a href="#"><li>Arma tu pc</li></a> 
      <a href="#"><li>Categorias</li></a> 
      <a href="#" className="buscar"><li>Buscar<FontAwesomeIcon icon={faMagnifyingGlass} /></li></a>  
      <div className="carrito">
        <CartWidget />
      </div>
      </ul>
    </div>
  );
}