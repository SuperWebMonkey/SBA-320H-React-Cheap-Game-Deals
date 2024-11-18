import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import CartPage from "./components/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Add item to cart
  const addDigimon = (digi) => {
    console.log("digimon is", digi);
    console.log("cart", cart);
    if (cart.length > 0) {
      console.log("item name", cart[0].name, ":", "digi name", digi.name);
      console.log(
        "is Koromon",
        cart.find((item) => {
          item.name === "Koromon";
        })
      );
    }

    let digiInCart = cart.find((item) => item.name === digi.name);

    console.log("in cart", digiInCart);

    checkInCart(digiInCart, digi);
  };

  const checkInCart = (inCart, digi) => {
    if (inCart) {
      setCart(
        cart.map((item) =>
          item.name === digi.name ? { ...item, count: item.count + 1 } : item
        )
      );
      console.log("Cart 2:", cart);
    } else {
      setCart([...cart, { ...digi, count: 1 }]);
      console.log("Contents", [...cart, { ...digi, count: 1 }]);
      console.log("Cart 1:", cart);
    }
  };

  const removeDigimon = (digi) => {
    const digiExist = cart.find((item) => item.name === digi.name);

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
      <Header itemCount={getCount()} />
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
        <Route
          path="/cart"
          element={<CartPage cartItems={cart} removeItem={removeDigimon} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
