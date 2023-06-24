import testImage from '../Images/test.webp';
import { useState, useEffect } from "react";
import { Teams } from "./Teams";

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

  const handleChange1 = (event) => {
    setInput1(event.target.value);
  };
  const handleChange2 = (event) => {
    setInput2(event.target.value);
  };
  const handleChange3 = (event) => {
    setInput3(event.target.value);
  };
  const handleChange4 = (event) => {
    setInput4(event.target.value);
  };
  const handleChange5 = (event) => {
    setInput5(event.target.value);
  };
  const handleChange6 = (event) => {
    setInput6(event.target.value);
  };
  const handleChange7 = (event) => {
    setInput7(event.target.value);
  };
  const handleChange8 = (event) => {
    setInput8(event.target.value);
  };
  const handleChange9 = (event) => {
    setInput9(event.target.value);
  };
  const handleChange10 = (event) => {
    setInput10(event.target.value);
  };
  const handleChange11 = (event) => {
    setInput11(event.target.value);
  };
  const handleChange12 = (event) => {
    setInput12(event.target.value);
  };
  const handleChange13 = (event) => {
    setInput13(event.target.value);
  };
  const handleChange14 = (event) => {
    setInput14(event.target.value);
  };

  const [players, setPlayers] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const generateTeams = () => {
    setPlayers([
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
    ]);
  };

  useEffect(() => {
    // This effect will run whenever players state is updated
    if (players.length > 0) {
      // Shuffle the players randomly
      let shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
      // Divide the players into two teams
      let newTeam1 = shuffledPlayers.slice(0, 7);
      let newTeam2 = shuffledPlayers.slice(7, 14);
      setTeam1(newTeam1);
      setTeam2(newTeam2);
    }
  }, [players]);

 
  return (
    <div >
      <div className="input-boxes">
      <input className="boxes" type="text" value={input1} onChange={handleChange1}></input>
      <input className="boxes" type="text" value={input2} onChange={handleChange2}></input>
      <input className="boxes" type="text" value={input3} onChange={handleChange3}></input>
      <input className="boxes" type="text" value={input4} onChange={handleChange4}></input>
      <input className="boxes" type="text" value={input5} onChange={handleChange5}></input>
      <input className="boxes" type="text" value={input6} onChange={handleChange6}></input>
      <input className="boxes" type="text" value={input7} onChange={handleChange7}></input>
      <input className="boxes" type="text" value={input8} onChange={handleChange8}></input>
      <input className="boxes" type="text" value={input9} onChange={handleChange9}></input>
      <input className="boxes" type="text" value={input10} onChange={handleChange10}></input>
      <input className="boxes" type="text" value={input11} onChange={handleChange11}></input>
      <input className="boxes" type="text" value={input12} onChange={handleChange12}></input>
      <input className="boxes" type="text" value={input13} onChange={handleChange13}></input>
      <input className="boxes" type="text" value={input14} onChange={handleChange14}></input>
      </div>
      <button type="submit" onClick={generateTeams} >
        Generate Teams
      </button>
      <Teams team1={team1} team2={team2}></Teams>
    </div>
  );
};
