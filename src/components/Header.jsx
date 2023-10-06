import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/basketContexts";

const Header = () => {

  const { basket } = useContext(BasketContext);
  // topam ürün miktarını hespalama
  const total = basket.reduce((total, i) => total + i.amount, 0);

  return (
    <div className="d-flex justify-content-between align-items-center p-4 sticky-top bg-primary">
      <Link to={"/"}>
        <h3>ContextAPI Store</h3>
      </Link>

      <div className="d-flex align-items-center gap-3">
        <Link to={"/sepet"}>
          <button>Sepete Git</button>
        </Link>
        <span className="badge bg-danger p-3 fs-5">{total}</span>
      </div>
    </div>
  );
};

export default Header;
