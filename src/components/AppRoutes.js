import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./products/Product";
import ProductNew from "./products/ProductNew";
import ProductEdit from "./products/ProductEdit";
import Contact from "./contacts/Contact";
import ContactNew from "./contacts/ContactNew";
import ContactEdit from "./contacts/ContactEdit";
import AboutUs from "./AboutUs";
import Login from "./user_management/Login"
import Register from "./user_management/Register";
import EmailNotVerified from "./user_management/EmailNotVerified";
import Profile from "./user_management/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<Product />}>
          <Route path="new" element={<ProductNew />} />
          <Route path="edit/:productId" element={<ProductEdit />} />
        </Route>
        <Route path="/contacts" element={<Contact />}>
          <Route path="new" element={<ContactNew />} />
          <Route path="edit/:contactId" element={<ContactEdit />} />
        </Route>
      </Route>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/email_unverified" element={<EmailNotVerified/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default AppRoutes;
