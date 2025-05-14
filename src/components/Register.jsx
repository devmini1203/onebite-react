import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  let count = 0;

  const onchange = (e) => {
    //countRef.current++;
    count++;
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.vlaue,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
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

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
