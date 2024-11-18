import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addDigimon = (digi) => {
    const digiInCart = cart.find((item) => {
      item.name === digi.name;
    });

    checkInCart(digiInCart, digi);
  };

  const checkInCart = (inCart, digi) => {
    if (inCart) {
      setCart(
        cart.map((item) =>
          item.name === digi.name ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...digi, count: 1 }]);
    }
  };

  const removeDigimon = (digi) => {
    const digiExist = cart.find((item) => {
      item.name === digi.name;
    });

    removeFromCart(digiExist, digi);
  };

  const removeFromCart = (digiExist, digi) => {
    if (digiExist && digiExist.count > 1) {
      setCart(
        cart.map((item) =>
          item.name === digi.name ? { ...item, count: item.count - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.name !== digi.name));
    }
  };

  const getCount = () => {
    return cart.reduce((sum, digi) => {
      sum += digi.count;
    }, 0);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              cart={cart}
              addDigimon={addDigimon}
              removeDigimon={removeDigimon}
            />
          }
        />
        {/* <Route path="/cart">
          <Cart cartItems={cart} removeItem={removeDigimon} />
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
