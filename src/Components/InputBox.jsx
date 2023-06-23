import { useState } from "react";

export const InputBox = () => {
  const [input1, setInput1] = useState("test");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");
  const [input10, setInput10] = useState("");
  const [input11, setInput11] = useState("");
  const [input12, setInput12] = useState("");
  const [input13, setInput13] = useState("");
  const [input14, setInput14] = useState("");

  const handleChange1 = (event) => {setInput1(event.target.value)}
  const handleChange2 = (event) => {setInput2(event.target.value)}
  const handleChange3 = (event) => {setInput3(event.target.value)}
  const handleChange4 = (event) => {setInput4(event.target.value)}
  const handleChange5 = (event) => {setInput5(event.target.value)}
  const handleChange6 = (event) => {setInput6(event.target.value)}
  const handleChange7 = (event) => {setInput7(event.target.value)}
  const handleChange8 = (event) => {setInput8(event.target.value)}
  const handleChange9 = (event) => {setInput9(event.target.value)}
  const handleChange10 = (event) => {setInput10(event.target.value)}
  const handleChange11 = (event) => {setInput11(event.target.value)}
  const handleChange12 = (event) => {setInput12(event.target.value)}
  const handleChange13 = (event) => {setInput13(event.target.value)}
  const handleChange14 = (event) => {setInput14(event.target.value)}


  return (
    <div>
      <input type="text" value={input1} onChange={handleChange1}></input>
      <input type="text" value={input2} onChange={handleChange2}></input>
      <input type="text" value={input3} onChange={handleChange3}></input>
      <input type="text" value={input4} onChange={handleChange4}></input>
      <input type="text" value={input5} onChange={handleChange5}></input>
      <input type="text" value={input6} onChange={handleChange6}></input>
      <input type="text" value={input7} onChange={handleChange7}></input>
      <input type="text" value={input8} onChange={handleChange8}></input>
      <input type="text" value={input9} onChange={handleChange9}></input>
      <input type="text" value={input10} onChange={handleChange10}></input>
      <input type="text" value={input11} onChange={handleChange11}></input>
      <input type="text" value={input12} onChange={handleChange12}></input>
      <input type="text" value={input13} onChange={handleChange13}></input>
      <input type="text" value={input14} onChange={handleChange14}></input>
      <button type="submit">Generate Teams</button>
    </div>
  );
};
