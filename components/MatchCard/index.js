import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = item
  const cName = matchStatus === 'Lost' ? 'red-color' : 'green-color'

  return (
    <li className="item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="l"
      />
      <p className="name">{competingTeam}</p>
      <p className="r">{result}</p>
      <p className={`${cName}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
