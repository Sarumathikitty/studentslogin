import React from "react";
const Login = () => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [result, setresult] = React.useState("");

  function check() {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setpassword("");
        setemail("");
        setresult(data);
      });
  }
  return (
    <div className="wrapper">
      <h2 style={{marginLeft:"80px"}}>Login </h2>
      <div style={{marginLeft:"30px"}}>
      <label>E-mail</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      </div>
      <br />
      <div style={{marginLeft:"10px"}}>
      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      </div>
      <br />
      <div style={{marginLeft:"90px",marginTop:"15px"}}>
      <button type="submit" onClick={() => check()}>
        Login
      </button>
      </div>
      <h3>{result.message}</h3>
    </div>
  );
};

export default Login;
