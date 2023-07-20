import React, { useEffect, useState } from "react";
import Logo from "../Landing page/Header/Logo";
import "./wrapper.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const Wrapper = (props) => {
  const [show, setShow] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {}, []);

  const Reveal = () => {
    setShow((prev) => !show);
  };

  const RevealProduct = () => {
    setShowProduct((prev) => !showProduct);
  };
  const RevealOrder = () => {
    setShowOrder((prev) => !showOrder);
  };

  return (
    <div className="flex h-[100vh]">
      <nav className="w-[20%] bg-neutral-400 flex flex-col items-center justify-evenly">
        <Logo />
        <ul>
          <li>
            <Link to="/admin/dashboard" className="flex items-center gap-5">
              <span className="material-symbols-outlined flex">dashboard</span>{" "}
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/event" className="flex items-center gap-5">
              <span className="material-symbols-outlined">event</span>
              <p>Events</p>
            </Link>
          </li>
          <li
            onClick={Reveal}
            className="flex items-center gap-5 cursor-pointer"
          >
            <span className="material-symbols-outlined">storefront</span>
            <p>E-Commerce</p>
          </li>
          <ul className={`${show ? "block" : "hidden"} ml-5`}>
            <li>
              <Link
                to="/admin/ecommerce/overview"
                className="flex items-center gap-5"
              >
                <span className="material-symbols-outlined">overview</span>
                <p>Overview</p>
              </Link>
            </li>
            <div>
              <li onClick={RevealProduct} className="cursor-pointer">
                <span className="material-symbols-outlined">inventory</span>
                <p>Products</p>
              </li>
              <ul
                className={`${
                  showProduct ? "block" : "hidden"
                } ml-5 cursor-pointer`}
              >
                <li>
                  <Link
                    to="/admin/ecommerce/product/create"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                    <p>Create Product</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/ecommerce/product/edit"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">edit</span>
                    <p>Edit Product</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/ecommerce/product"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">list</span>
                    <p>Product List</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cursor-pointer">
              <li onClick={RevealOrder} className="flex items-center gap-5">
                <span className="material-symbols-outlined">event</span>
                <p>Orders</p>
              </li>

              <ul className={`${showOrder ? "block" : "hidden"} ml-5`}>
                <li>
                  <Link
                    to="/admin/ecommerce/order"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">list</span>
                    <p>Order List</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/ecommerce/order-detail"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">page_info</span>
                    <p>Order Details</p>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
          <li>
            <Link to="/admin/inbox" className="flex items-center gap-5">
              <span className="material-symbols-outlined">mail</span>
              <p>Messages</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="flex items-center gap-5">
              <span className="material-symbols-outlined">person</span>
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-[80%] px-4 overflow-hidden wrapper">
        {props.children}
      </main>
    </div>
  );
};

export default Wrapper;
