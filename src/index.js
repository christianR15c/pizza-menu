import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingridients="Tomato, mozarella, spinach, and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Funghi"
        ingridients="Tomato, mozarella, mushrooms, and onion"
        photo="pizzas/funghi.jpg"
        price="12"
      />
    </main>
  );
}

function Pizza({ name, ingridients, price, photo }) {
  return (
    <div className="pizza">
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingridients}</p>
        <span>{price}</span>
      </div>
    </div>
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
