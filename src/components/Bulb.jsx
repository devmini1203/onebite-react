import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);

  return (
    <button
      onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}
    >
      {light === "ON" ? "끄기" : "켜기"}
    </button>
  );
};

export default Bulb;
