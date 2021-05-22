import { useEffect, useState } from "react";
import data from "./Data/data.json";
import { Nav } from "./Components/Nav/Nav";
import "./styles.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import arrowr from "./right-arrow.svg";
import circle from "./red-circle.svg";

export default function App() {
  const [response, setResponse] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setResponse(data);
  }, []);
  // console.log(response[0]);

  const handleAdd = (item) => {
    console.log(item.product.name);
    setCart([...cart, item]);

    const itemPrice = Number.parseFloat(item.product.price.value);
    const finalBill = subtotal + itemPrice;
    console.log(itemPrice, finalBill);
    setSubtotal(finalBill);
    setAmount(amount + 1);
  };

  const handleRemoveItem = (itemIndex) => {
    setCart(cart.filter((_, index) => index !== itemIndex));
    setAmount(amount - 1);
  };

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <section className="products">
          <span className="amount">
            <img src={circle} alt="circle" />
            <span className="amount-text">{amount}</span>
          </span>
          <ul>
            {cart.map((item, index) => (
              <li className="product" key={index}>
                <button value={index} onClick={() => handleRemoveItem(index)}>
                  X
                </button>
                <p>{item.product.name}</p>
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
          <p className="subtotal-value"></p>
          <p className="subtotal-value">ou R$ {subtotal} à vista</p>
        </section>

        <ul>
          {response.map((item, index) => (
            <li key={index} className="cards">
              <section className="product-img"></section>
              <p className="product-name">
                {item.product.name} <IoMdHeartEmpty className="heart" />
              </p>

              <div className="product-prices">
                <div className="arrow-tag">
                  <p>MELHOR PREÇO</p>
                  <img src={arrowr} alt="arrow" />
                </div>

                <p className="installments">
                  {item.product.price.installments}x R${" "}
                  <span className="installment-value">
                    {" "}
                    {item.product.price.installmentValue}
                  </span>
                  <button
                    value={item}
                    type="submit"
                    onClick={() => handleAdd(item)}
                  >
                    Adicionar ao carrinho
                    <IoIosArrowForward className="arrow" />
                  </button>
                </p>

                <span>
                  ou{" "}
                  <span className="price">R$ {item.product.price.value}</span> à
                  vista
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
