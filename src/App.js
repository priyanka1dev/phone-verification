import "./styles.css";
import OtpInput from "react-otp-input";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  const [popup, setPopup] = useState('none')  

  const toggler = ()=>{
    setPopup('')
  }

  const unToggler = ()=>{
    setPopup("none")
  }

  return (
    <div className="mainApp">
      <button className="toggler" onClick={toggler}>Show Verification Bar</button>
      <div className="App" style={{display: popup}}>
      <div className="row">
        <h1 className="phone">Phone Verification</h1>
        <hr />
      </div>
      <div className="row">
        <p>Enter the otp you received on 99810-6XXXX</p>
      </div>
      <div className="row">
      <OtpInput
        value={code}
        onChange={handleChange}
        className="otp"
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none"
        }}
      />
      </div>
      <div className="row">
        <button className="press">Verify Phone Number</button>
      </div>
      <div>
        <button className="toggler" onClick={unToggler}>Hide Verification Bar</button>
      </div>
    </div>
    </div>
  );
}
