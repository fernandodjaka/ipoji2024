import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../../styles/product-card.css";

const ProductCard = ({ item, handleAddToCart }) => {
  const { id_produk, nama_produk, gambar_produk, harga_produk } = item;

  const handleClick = () => {
    handleAddToCart(id_produk);
  };

  return (
    <div className="product__container" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
      <div className="product__item" onClick={handleClick}>
        <div className="product__img">
          <img src={`http://localhost:8080/gambar/${gambar_produk}`} alt={nama_produk} className="w-50" />
        </div>

        <div className="product__content">
          <h5>
            <Link to={`/detail/${id_produk}`}>{nama_produk}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">Rp.{harga_produk}</span>
            <button className="addTOCart__btn">
              <FontAwesomeIcon icon={faShoppingCart} /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
