import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onchange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.vlaue,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onchange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onchange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onchange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onchange}></textarea>
      </div>
    </div>
  );
};

export default Register;
