export const Teams = ({ team1, team2 }) => {
  return (
    <div className="teams">
      {team1.length > 0 ? (
        <h3 className="team1">
          Team 1:{" "}
          {team1.map((player) => {
            return <p className="players" key={player}>{player}</p>;
          })}
        </h3>
      ) : (
        <p></p>
      )}
      {team2.length > 0 ? (
        <h3 className="team2">
          Team 2:{" "}
          {team2.map((player) => {
            return <p className="players" key={player}>{player}</p>;
          })}
        </h3>
      ) : (
        <p></p>
      )}
    </div>
  );
};
