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

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h3>Pizza spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
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
