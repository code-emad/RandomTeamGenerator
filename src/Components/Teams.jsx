
export const Teams = ({team1, team2}) => {

    return (
        <div>
              {team1.length > 0 ? <p>Team 1: {team1.map((player)=> {return <p>{player}</p>})}</p> : <p></p>}
              {team2.length > 0 ? <p>Team 2: {team2.map((player)=> {return <p>{player}</p>})}</p> : <p></p>}
        </div>
    )
}