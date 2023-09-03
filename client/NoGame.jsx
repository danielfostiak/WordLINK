"use client";
import React from "react";

import Nav from "./components/Nav";
import HowToModal from "./components/HowToModal";
import CalendarComp from "./components/CalendarComp";

import ComingSoonModal from "./components/ComingSoonModal";

export default function NoGame() {
  return (
    <div>
      <Nav />
      <div className="card w-11/12 bg-base-100 shadow-xl mx-auto mt-4">
        <div className="card-body ">
          <h2 className="card-title">There's no challenge today</h2>
          {/* <h2 className="card-title">SF Pro Display Font</h2> */}
          {/* <p>{`Go from the word ${start} to '${end}'`}</p> */}
          <p>
            Unfortunately, I haven't developed a challenge for this day.... yet.
            A new challenge releases every day at 1am in the morning UK time.
          </p>
        </div>
      </div>
      <CalendarComp />
      <HowToModal />
      <ComingSoonModal />
    </div>
  );
}
