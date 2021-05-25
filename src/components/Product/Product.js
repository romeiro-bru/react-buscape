import React from "react";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import "./style.css";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import arrowr from "./right-arrow.svg";
import circle from "./red-circle.svg";

export function Product() {
  const [response, setResponse] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [installment, setInstallment] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setResponse(data);
  }, []);
  // console.log(response[0]);
  //

  const handleAdd = (item) => {
    setCart([...cart, item]);
    setAmount(amount + 1);

    const itemPrice = Number.parseFloat(item.product.price.value);
    const finalBill = subtotal + itemPrice;
    setSubtotal(finalBill);

    const inst = Number.parseFloat(item.product.price.installmentValue);
    const instSum = installment + inst;
    setInstallment(instSum);
  };

  const handleRemoveItem = (item, itemIndex) => {
    setCart(cart.filter((_, index) => index !== itemIndex));
    setAmount(amount - 1);

    const itemPrice = Number.parseFloat(item.product.price.value);
    const finalBill = subtotal - itemPrice;
    setSubtotal(finalBill);

    const inst = Number.parseFloat(item.product.price.installmentValue);
    const instRemove = installment - inst;
    setInstallment(instRemove);
  };
  return (
    <div className="container">
      <section className="cart">
        <span className="amount">
          <img src={circle} alt="circle" />
          <span className="amount-text">{amount}</span>
        </span>
        <ul>
          {cart.map((item, index) => (
            <li className="cart-product" key={index}>
              <button
                value={index}
                onClick={() => handleRemoveItem(item, index)}
              >
                X
              </button>
              <p className="cart-name">{item.product.name}</p>
              <p>
                {item.product.price.installments}x R${" "}
                {item.product.price.installmentValue}
              </p>
              <p>ou R$ {item.product.price.value} à vista</p>
            </li>
          ))}
        </ul>
        <div className="subtotal">
          <p>subtotal</p>
        </div>
        <p className="subtotal-value">10x R${installment}</p>
        <p className="subtotal-value">ou R$ {subtotal} à vista</p>
      </section>

      <ul>
        {response.map((item, index) => (
          <li key={index} className="cards">
            <section className="product-img">
              <img src={item.product.images} alt="img" />
            </section>

            <section>
              <p className="product-name">
                {item.product.name} <IoMdHeartEmpty className="heart" />
              </p>

              <section className="product-prices">
                <section>
                  <div className="arrow-tag">
                    <p>MELHOR PREÇO</p>
                    <img src={arrowr} alt="arrow" />
                  </div>

                  <span className="installments">
                    {item.product.price.installments}x R$
                    <span className="installment-value">
                      {item.product.price.installmentValue}
                    </span>
                  </span>

                  <span className="price-value">
                    ou{" "}
                    <span className="price">R$ {item.product.price.value}</span>{" "}
                    à vista
                  </span>
                </section>

                <section className="card-product-button">
                  <button
                    value={item}
                    type="submit"
                    onClick={() => handleAdd(item)}
                  >
                    Adicionar ao carrinho
                    <IoIosArrowForward className="arrow" />
                  </button>
                </section>
              </section>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}