import React, { useEffect, useState } from "react";
import Logo from "../Landing page/Header/Logo";
import "./wrapper.css";
import { GrMenu } from "react-icons/gr";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Job from "../Jobs/Jobs/Job";

const Wrapper = (props) => {
  const [show, setShow] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showJob, setJob] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.title = "ADMIN PAGE | DASHBOARD";
  }, []);

  const Reveal = () => {
    setShow((prev) => !show);
    // showMenu();
  };

  const RevealProduct = () => {
    setShowProduct((prev) => !showProduct);
    // showMenu();
  };
  const RevealOrder = () => {
    setShowOrder((prev) => !showOrder);
    // showMenu();
  };
  const RevealJob = () => {
    setJob((prev) => !showJob);
    // showMenu();
  };

  const showMenu = () => {
    setMenu((prev) => !menu);
  };

  return (
    <main className="flex h-[100vh]">
      <div
        className="flex sm:hidden my-10 mx-3 gap-3 cursor-pointer h-max"
        onClick={showMenu}
      >
        <p>
          <GrMenu size={20} />
        </p>
      </div>
      <nav
        className={`${
          menu ? "grid w-[70%]" : "hidden"
        } sm:w-[33%]  xl:w-[20%] bg-neutral-400 flex flex-col items-center justify-evenly sm:grid `}
      >
        <div className="text-center m-auto">
          <Logo />
        </div>
        <ul className="text-blue-400">
          <li onClick={showMenu}>
            <Link to="/admin/dashboard" className="flex items-center gap-5 ">
              <span className="material-symbols-outlined flex">dashboard</span>{" "}
              <p>Dashboard</p>
            </Link>
          </li>
          <li onClick={showMenu}>
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
            <li onClick={showMenu}>
              <Link
                to="/admin/ecommerce/overview"
                className="flex items-center gap-5"
              >
                <span className="material-symbols-outlined">overview</span>
                <p>Overview</p>
              </Link>
            </li>
            <div>
              <li onClick={RevealProduct} className="cursor-pointer gap-5">
                <span className="material-symbols-outlined">inventory</span>
                <p>Products</p>
              </li>
              <ul
                className={`${
                  showProduct ? "block" : "hidden"
                } ml-5 cursor-pointer`}
              >
                <li onClick={showMenu}>
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
                {/* <li>
                  <Link
                    to="/admin/ecommerce/product/edit"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">edit</span>
                    <p>Edit Product</p>
                  </Link>
                </li> */}
                <li onClick={showMenu}>
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
                <li onClick={showMenu}>
                  <Link
                    to="/admin/ecommerce/order"
                    className="flex items-center gap-5"
                  >
                    <span className="material-symbols-outlined">list</span>
                    <p>Order List</p>
                  </Link>
                </li>
                <li onClick={showMenu}>
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
          <li
            onClick={RevealJob}
            className="flex items-center gap-5 cursor-pointer"
          >
            <span className="material-symbols-outlined">storefront</span>
            <p>Jobs</p>
          </li>
          <ul className={`${showJob ? "block" : "hidden"}`}>
            <li onClick={showMenu}>
              <Link to="/admin/job" className="flex items-center gap-5">
                <span className="material-symbols-outlined">overview</span>
                <p>Overview</p>
              </Link>
            </li>
            <li onClick={showMenu}>
              <Link to="/admin/job/create" className="flex items-center gap-5">
                <span className="material-symbols-outlined">add</span>
                <p>Post Jobs</p>
              </Link>
            </li>
            <li onClick={showMenu}>
              <Link
                to="/admin/job/application"
                className="flex items-center gap-5"
              >
                <span className="material-symbols-outlined">add</span>
                <p>Applications</p>
              </Link>
            </li>
          </ul>
          <li onClick={showMenu}>
            <Link to="/admin/inbox" className="flex items-center gap-5">
              <span className="material-symbols-outlined">mail</span>
              <p>Messages</p>
            </Link>
          </li>
          <li onClick={showMenu}>
            <Link to="/admin/profile" className="flex items-center gap-5">
              <span className="material-symbols-outlined">person</span>
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
      <main
        className={`${
          !menu ? "grid" : "hidden"
        } "sm:w-[80%] w-full px-4 overflow-auto wrapper sm:grid"`}
      >
        {props.children}
      </main>
    </main>
  );
};

export default Wrapper;
