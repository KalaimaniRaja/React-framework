import React, { useEffect, useState } from "react";
import "./ratings.scss";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);

  console.log(props);
  const { name, value, onChange } = props;
  const [controlled, setControlled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)

  useEffect(() => {
    if(name === "controlled") {
    setControlled(true);
    }
    else if (name === "read-only") {
    setReadOnly(true)
    }
  }, []);

  useEffect(() => {
    setRatingValue(value);
  }, [value]);

  useEffect(() => {
    {controlled  &&
    onChange(rating);
  }
  }, [rating]);
  return (
    <div className="star-rating">
      {controlled && (
        <>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= ((rating && hover) || hover) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </>
      )}

      {readOnly  && (
        <>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= ratingValue ? "on" : "off"}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </>
      )}
    </div>
  );
};

export default StarRating;
