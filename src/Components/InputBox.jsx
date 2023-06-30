import { useState, useEffect } from "react";
import { Teams } from "./Teams";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

export const InputBox = () => {
  const [input1, setInput1] = useState("1. ");
  const [input2, setInput2] = useState("2. ");
  const [input3, setInput3] = useState("3. ");
  const [input4, setInput4] = useState("4. ");
  const [input5, setInput5] = useState("5. ");
  const [input6, setInput6] = useState("6. ");
  const [input7, setInput7] = useState("7. ");
  const [input8, setInput8] = useState("8. ");
  const [input9, setInput9] = useState("9. ");
  const [input10, setInput10] = useState("10. ");
  const [input11, setInput11] = useState("11. ");
  const [input12, setInput12] = useState("12. ");
  const [input13, setInput13] = useState("13. ");
  const [input14, setInput14] = useState("14. ");

  const [players, setPlayers] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const generateTeams = () => {
    jsConfetti.addConfetti({
      emojis: ["⚽"],
      confettiRadius: 9,
      confettiNumber: 30,
      emojiSize: 70,
    });
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
    <div>
      <div className="input-boxes">
        <input
          className="boxes"
          type="text"
          value={input1}
          onChange={(e) => {setInput1(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input2}
          onChange={(e) => {setInput2(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input3}
          onChange={(e) => {setInput3(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input4}
          onChange={(e) => {setInput4(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input5}
          onChange={(e) => {setInput5(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input6}
          onChange={(e) => {setInput6(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input7}
          onChange={(e) => {setInput7(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input8}
          onChange={(e) => {setInput8(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input9}
          onChange={(e) => {setInput9(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input10}
          onChange={(e) => {setInput10(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input11}
          onChange={(e) => {setInput11(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input12}
          onChange={(e) => {setInput12(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input13}
          onChange={(e) => {setInput13(e.target.value)}}
        ></input>
        <input
          className="boxes"
          type="text"
          value={input14}
          onChange={(e) => {setInput14(e.target.value)}}
        ></input>
      </div>
      <button type="submit" onClick={generateTeams}>
        Generate Teams
      </button>
      <Teams team1={team1} team2={team2}></Teams>
    </div>
  );
};
