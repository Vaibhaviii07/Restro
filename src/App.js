import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Component/CartContext"; 
import Menu from "./Component/Menu";
import Cart from "./Component/Cart";
import Header from "./Component/Header"; 
import About from "./Component/About";
import BookTable from "./Component/BookTable";
import Sign_up from "./Component/Sign _up";
import Login from "./Component/Login";
import Contact from "./Component/Contact";
import Billing from "./Component/Billing";
import CheckOut from "./Component/CheckOut";
import ReviewPage from "./Component/ReviewPage";




function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Menu />
            <BookTable />
            <ReviewPage />
            <About/>
            </>
          }
          />
          <Route path="/Menu" element={
           <> 
           <Menu />
          <About/>
            </>
            } />
           <Route path="/About" element={
           <> 
          <About/>
            </>
            } />
             <Route path="/BookTAble" element={
           <> 
          <BookTable/>
          <About/>
            </>
            } />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Billing" element={<Billing />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
