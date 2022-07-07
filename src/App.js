// import logo from "./jaro-flowers.jpg";
// import "./App.css";
// import AboutMeButton from "./AboutMeButton";
// import Concat from "./Concat";
// import Gallery from "./Gallery";
import Menu from "./Menu";
// import Image from "./Image";
// import Button from "./Button";

import { useState, useEffect } from "react";
import React from "react";
// import MenuItem from "./MenuItem";
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  //Zadanie 1 i 2.
  const [sayHello, setSayHello] = useState("Przywitaj się!");
  const [welcomeStranger, setWelcomeStranger] = useState("nieznajomy");
  const [isDisabled, setIsDisabled] = useState(true);
  const [disabledButtonName, setIsDisabledButtonName] = useState("Unlock");
  const [showWord, setShowWord] = useState("");

  const showName = () => {
    setWelcomeStranger("Kacper");
  };
  const isButtonDisabled = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled) {
      setIsDisabledButtonName("Lock");
    } else {
      setIsDisabledButtonName("Unlock");
    }
  };
  let inputValue = null;
  const takeInputValue = (event) => {
    inputValue = event.target.value;
  };
  const showInputValue = () => {
    return setShowWord(inputValue);
  };
  // Zadanie 3.
  const [shoppingList, setShoppingList] = useState();
  const [isListDisabled, setIsListDisabled] = useState(true);
  const [disabledButtonName2, setIsDisabledButtonName2] = useState("True");

  const isButtonDisabled2 = () => {
    setIsListDisabled(!isListDisabled);
    if (isListDisabled) {
      setIsDisabledButtonName2("True");
    } else {
      setIsDisabledButtonName2("False");
    }
  };
  const showList = () => {
    if (isListDisabled) {
      setShoppingList(<Menu />);
    } else {
      setShoppingList(null);
    }
  };
  /// Zadanie 4.
  const [productsList, setProductsList] = useState([]);
  const [inputValue2, setInputValue] = useState("");

  const takeInputValue2 = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddToList = () => {
    const newProduct = inputValue2;
    const newProducts = [...productsList, newProduct];
    setProductsList(newProducts);
    setInputValue("");
  };
  //Zadanie 5.
  const [counter, setCounter] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const add = () => {
    setCounter(counter + 1);
  };
  const substract = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    const slicedArr = numbersArr.slice(0, counter);
    setNumbers(slicedArr);
  }, [counter]);

  // Zadanie 6.
  const [time, setTime] = useState(new Date().toUTCString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <h2>Zadanie 1.</h2>
        <button onClick={showName} disabled={isDisabled}>
          {sayHello}
        </button>
        <h3>Witaj {welcomeStranger}!</h3>
        <button onClick={isButtonDisabled}>{disabledButtonName}</button>
      </div>
      <div>
        <h2>Zadanie 2.</h2>
        <input onChange={takeInputValue}></input>
        <button onClick={showInputValue}>Show</button>
        <h5>{showWord}</h5>
      </div>
      <div>
        <h2>Zadanie 3.</h2>
        <button onClick={showList}>Show list</button>
        <button onClick={isButtonDisabled2}>{disabledButtonName2}</button>
        <div>{shoppingList}</div>
      </div>
      <div>
        <h2>Zadanie 4.</h2>
        <input onChange={takeInputValue2}></input>
        <button onClick={handleAddToList}>Add to list</button>
        <ul>
          {productsList.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Zadanie 5.</h2>
        <button onClick={add}>Add</button>
        <button onClick={substract}>Subtract</button>
      </div>
      <h1>{counter}</h1>
      <ul>
        {numbers.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <div>
        <h2>Zadanie 6</h2>
        <p>Current time :{time}</p>
      </div>
    </>
  );
}

export default App;
