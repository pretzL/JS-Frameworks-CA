import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Product, Cart, Checkout, Contact, NotFound } from "./pages";
import { Layout } from "./components";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<Product id />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
