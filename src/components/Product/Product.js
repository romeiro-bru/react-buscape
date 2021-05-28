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
  const [hideCart, setHideCart] = useState(true);

  useEffect(() => {
    setResponse(data);
  }, []);
  // console.log(response[0]);

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

    cart.length === 1 && setHideCart(true);
  };

  const handleToggleCart = () => {
    hideCart ? setHideCart(false) : setHideCart(true);
  };

  return (
    <>
      <span hidden={amount === 0} className="amount">
        <img src={circle} alt="circle" />
        <button onClick={handleToggleCart} className="amount-text">
          {amount}
        </button>
      </span>

      <section hidden={hideCart} className="cart">
        <ul>
          {cart.map((item, index) => (
            <li className="cart-product" key={index}>
              <button
                value={index}
                onClick={() => handleRemoveItem(item, index)}
              >
                X
              </button>
              <img src={item.product.images[0]} alt="img" />
              <section className="cart-text">
                <p className="cart-name">{item.product.name}</p>
                <p>
                  {item.product.price.installments}x R${" "}
                  {item.product.price.installmentValue}
                </p>
                <p>ou R$ {item.product.price.value.toLocaleString()} à vista</p>
              </section>
            </li>
          ))}
        </ul>
        <div className="subtotal">
          <p>subtotal</p>
        </div>
        <p className="subtotal-value">10x R${installment}</p>
        <p className="subtotal-value">
          ou R$ {subtotal.toLocaleString()} à vista
        </p>
      </section>

      <div className="container">
        <ul>
          {response.map((item, index) => (
            <li key={index} className="cards">
              <section className="product-img">
                <section className="product-images">
                  {item.product.images.map((_, index) => (
                    <img
                      id="s-img"
                      key={index}
                      src={item.product.images[index]}
                      alt="img"
                    />
                  ))}
                </section>
                <img src={item.product.images[0]} alt="img" />
              </section>

              <section className="card-info">
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
                        {item.product.price.installmentValue.toLocaleString()}
                      </span>
                    </span>

                    <span className="price-value">
                      ou{" "}
                      <span className="price">
                        R$ {item.product.price.value.toLocaleString()}
                      </span>{" "}
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
    </>
  );
}
