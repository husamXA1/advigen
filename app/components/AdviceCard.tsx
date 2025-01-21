"use client";

import Image from "next/image";
import { useState } from "react";
import "./AdviceCard.css";

export default function AdviceCard() {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState("");
  const [error, setError] = useState(false);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdviceID(`Advice #${data.slip.id}`);
        setAdvice(`"${data.slip.advice}"`);
        setError(false);
      })
      .catch((reason) => {
        console.error(reason);
        setAdviceID("ERROR!");
        setAdvice(
          "Error fetching advice! Check your internet connection and try again!"
        );
        setError(true);
      });
  };

  return (
    <div className="advice-card p-5 pb-10 relative max-w-[500px] mx-auto text-center bg-[#323a49] text-[#cce1e6] rounded-lg">
      <p className={`${error ? "text-red-600 font-bold" : "text-[#53ffab]"} lg:text-lg`}>
        {adviceID || "AdviGen"}
      </p>
      <p className="advice-text md:text-lg lg:text-xl my-5">
        {advice || "Click the button to get a random advice."}
      </p>
      <Image
        src={"/assets/pattern-divider.svg"}
        alt="pattern-divider"
        width={500}
        height={50}
        className="mx-auto mt-5"
      />
      <button
        onClick={fetchAdvice}
        className="advice-button bg-[#53ffab] transition-shadow w-12 h-12 rounded-full flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <Image
          src={"/assets/dice.svg"}
          alt="dice-icon"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
}
