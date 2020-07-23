import React from "react";
const Register = () => {
  const [name, setname] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [email, setemail] = React.useState("");
  const [result, setresult] = React.useState("");

  function add() {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setname("");
        setresult(data);
        setpassword("");
        setemail("");
      });
  }

  return (
    <div >
      <h2 style={{marginLeft:"50px"}}>Registration</h2>
      <div style={{marginLeft:"10px"}}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      ></input>
      </div>
      <br />
      <div style={{marginLeft:"10px"}}>
      <label>E-mail</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      </div>
      <br />
      <div style={{marginLeft:"10px"}}>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      </div>
      <br />
      <div className="register">
      <button style={{marginLeft:"80px",marginTop:"10px"}} type="submit" onClick={() => add()}>
        Register
      </button>
      </div>
      <h3>{result.message}</h3>
    </div>
  );
};

export default Register;