"use client";

import React from "react";
import { useState, useEffect } from "react";
import PopupModal from "../../utils/PopupModal";

const Bookings = () => {
  return (
    <main className="">
      <main className="">
        <h1>Contact Information</h1>
        <form action="">
          <div>
            <div>
              <label htmlFor="firstName">
                <input type="text" />
              </label>
              <label htmlFor="lastName">
                <input type="text" />
              </label>
            </div>
            <div>
              <div>
                <label htmlFor="email">
                  <input type="text" />
                </label>
              </div>
              <div>
                <label htmlFor="confirmEmail">
                  <input type="text" />
                </label>
              </div>
            </div>
          </div>
        </form>
        <section>
          <h2>Ticket: General Admission</h2>
          <form action="">
            <div>
              <h1>Choose Ticket Type</h1>
              <select name="" id=""></select>
            </div>
          </form>
        </section>
      </main>
    </main>
  );
};

export default Bookings;
