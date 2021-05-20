import "./styles.css";
import { Nav } from "./Components/Nav/Nav";
import data from "./Data/data.json";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import arrowr from "./right-arrow.svg";

export default function App() {
  return (
    <div className="App">
      <Nav />
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
              <button>
                Adicionar ao carrinho
                <IoIosArrowForward className="arrow" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
