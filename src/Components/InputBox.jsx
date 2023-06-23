import { useState } from "react";

export const InputBox = () => {
  const [input1, setInput1] = useState("1");
  const [input2, setInput2] = useState("2");
  const [input3, setInput3] = useState("3");
  const [input4, setInput4] = useState("4");
  const [input5, setInput5] = useState("5");
  const [input6, setInput6] = useState("6");
  const [input7, setInput7] = useState("7");
  const [input8, setInput8] = useState("8");
  const [input9, setInput9] = useState("9");
  const [input10, setInput10] = useState("10");
  const [input11, setInput11] = useState("11");
  const [input12, setInput12] = useState("12");
  const [input13, setInput13] = useState("13");
  const [input14, setInput14] = useState("14");

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

  const generateTeams = () => {
    const players = [
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      input9,
      input10,
      input11,
      input12,
      input13,
      input14,
    ];

    // Shuffle the players randomly
    const shuffledPlayers = players.sort(() => Math.random() - 0.5);

    // Divide the players into two teams
    const team1 = shuffledPlayers.slice(0, 7);
    const team2 = shuffledPlayers.slice(7, 14);

    console.log("Team 1:", team1);
    console.log("Team 2:", team2);
  };


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
      <button type="submit" onClick={generateTeams}>Generate Teams</button>
    </div>
  );
};
