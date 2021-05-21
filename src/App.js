import "./styles.css";
import { Nav } from "./Components/Nav/Nav";
import data from "./Data/data.json";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import arrowr from "./right-arrow.svg";
import circle from "./red-circle.svg";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [amount, setAMount] = useState(0);

  const handleAdd = (e) => {
    setProducts([...products, e.target.name]);

    const itemPrice = Number.parseFloat(e.target.value);
    const finalBill = subtotal + itemPrice;
    setSubtotal(finalBill);

    setAMount(amount + 1);
  };

  const handleRemoveItem = (itemIndex) => {
    setProducts(products.filter((_, index) => index !== itemIndex));
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
            {products.map((item, index) => (
              <li className="product" key={index}>
                <button value={index} onClick={() => handleRemoveItem(index)}>
                  X
                </button>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <p>subtotal</p>
          </div>
          <p className="subtotal-value">10x R$ {subtotal / 10}</p>
          <p className="subtotal-value">ou R$ {subtotal} à vista</p>
        </section>

        <ul>
          {data.map((item, index) => (
            <li key={index} className="cards">
              <p>
                {item.product.name} <IoMdHeartEmpty className="heart" />
              </p>
              <span className="green-text">
                {item.product.price.installments}x R${" "}
                {item.product.price.installmentValue}
              </span>

              <div className="card-prices">
                <div className="arrow-tag">
                  <p>MELHOR PREÇO</p>
                  <img src={arrowr} alt="arrow" />
                </div>
                <span>
                  ou{" "}
                  <span className="green-text">
                    R$ {item.product.price.value}
                  </span>{" "}
                  à vista
                </span>
                <button
                  value={item.product.price.value}
                  name={item.product.name}
                  onClick={handleAdd}
                >
                  Adicionar ao carrinho
                  <IoIosArrowForward className="arrow" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
