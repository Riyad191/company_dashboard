import React, { useState } from "react";

const Practice = () => {
  const [show1, setShow1] = useState(false);
  const [hide1, setHide1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [hide2, setHide2] = useState(true);
  const [show3, setShow3] = useState(false);
  const [hide3, setHide3] = useState(true);
  const [show4, setShow4] = useState(false);
  const [hide4, setHide4] = useState(true);
  const [show5, setShow5] = useState(false);
  const [hide5, setHide5] = useState(true);
  const [show6, setShow6] = useState(false);
  const [hide6, setHide6] = useState(true);
  const [count, setCount] = useState(0);
  const clickhandler1 = () => {
    alert("are you sure");
    setShow1(true);
    setHide1(false);
    setCount(count + 1);
  };
  const clickhandler2 = () => {
    alert("are you sure");
    setShow2(true);
    setHide2(false);
    setCount(count + 1);
  };
  const clickhandler3 = () => {
    alert("are you sure");
    setShow3(true);
    setHide3(false);
    setCount(count + 1);
  };
  const clickhandler4 = () => {
    alert("are you sure");
    setShow4(true);
    setHide4(false);
    setCount(count + 1);
  };
  const clickhandler5 = () => {
    alert("are you sure");
    setShow5(true);
    setHide5(false);
    setCount(count + 1);
  };
  const clickhandler6 = () => {
    alert("are you sure");
    setShow6(true);
    setHide6(false);
    setCount(count + 1);
  };
  return (
    <div>
      <h1>counter: {count}</h1>
      <div style={{ border: "solid 2px red", width: 300, height: 400 }}>
        {hide1 && <button onClick={clickhandler1}>a</button>}
        {hide2 && <button onClick={clickhandler2}>ab</button>}
        {hide3 && <button onClick={clickhandler3}>abc</button>}
        {hide4 && <button onClick={clickhandler4}>abcd</button>}
        {hide5 && <button onClick={clickhandler5}>abcde</button>}
        {hide6 && <button onClick={clickhandler6}>abcdef</button>}
      </div>
      <div style={{ border: "solid 2px red", width: 300, height: 400 }}>
        {show1 && <h1>a</h1>}
        {show2 && <h1>ab</h1>}
        {show3 && <h1>abc</h1>}
        {show4 && <h1>abcd</h1>}
        {show5 && <h1>abcde</h1>}
        {show6 && <h1>abcdef</h1>}
      </div>
    </div>
  );
};

export default Practice;
