import React, { useEffect, useState } from "react";
import "./accordion.scss";

function Accordion() {
  const [clicked, setClicked] = useState();
  const Data = [
    {
      question: "Which versions of React include Hooks ?",
      answer:
        "Starting with 16.8.0, React includes a stable implementation of React Hooks for",
    },
    {
      question: "Do I need to rewrite all my class components ?",
      answer:
        "No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. We recommend trying Hooks in new code.",
    },
    {
      question: "Do Hooks cover all use cases for classes?",
      answer:
        "Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch lifecycles yet, but we plan to add them soon.",
    },
  ];

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <>
      <div className="accordion-wrap">
        {Data.map((e, i) => {
          return (
            <div className="accordion-item" key={i}>
              <div className="accordion-header" onClick={() => toggle(i)}>
                {e.question}

                {i === clicked ? (
                  <i className="icon-up"></i>
                ) : (
                  <i className="icon-down"></i>
                )}
              </div>

              {i === clicked && (
                <div className="accordion-body">{e.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
