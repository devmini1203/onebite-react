import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("이름");
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const [birth, setBirth] = useState("");
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const [country, setCoutry] = useState("");
  const onChangeCountry = (e) => {
    setCoutry(e.target.value);
  };

  const [bio, setBio] = useState("");
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
