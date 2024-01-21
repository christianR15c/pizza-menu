import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data';

console.log(pizzaData);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numbPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {numbPizzas > 0 ? (
          pizzas.map((pizza) => <Pizza key={pizza.name} pizzaObject={pizza} />)
        ) : (
          <h1>We're still working on our menu. Please come later...</h1>
        )}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>

        {props.pizzaObject.soldOut ? (
          <span>sold out</span>
        ) : (
          <span>{props.pizzaObject.price}</span>
        )}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let workingStatus;

  if (hour >= openHour && hour <= closeHour) {
    workingStatus = "We're currently open!";
  } else workingStatus = "Sorry, We're closed!";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. {workingStatus}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
