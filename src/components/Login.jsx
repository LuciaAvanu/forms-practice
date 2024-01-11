import { useRef, useState } from "react";

export default function Login() {
  const [inputData, setInputData] = useState({});


  function handleSubmission(event) {
    event.preventDefault();
    console.log("Form submitted.");
  }

  // function handleEmailChange(event){
  //   console.log(event.target.value)
  // }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          Login
        </button>
      </p>
    </form>
  );
}
