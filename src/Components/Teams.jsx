
export const Teams = ({team1, team2}) => {

    return (
        <div class="teams">
              {team1.length > 0 ? <h3>Team 1: {team1.map((player)=> {return <p>{player}</p>})}</h3> : <p></p>}
              {team2.length > 0 ? <h3>Team 2: {team2.map((player)=> {return <p>{player}</p>})}</h3> : <p></p>}
        </div>
    )
}