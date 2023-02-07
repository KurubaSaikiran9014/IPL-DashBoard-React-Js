import './index.css'

const LatestMatch = props => {
  const {det} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = det

  return (
    <div className="latest-cont">
      <div className="match-det-cont">
        <p className="title1">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="latest-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="innings-cont">
        <h1 className="f-i">First Innings</h1>
        <p className="f-i-det">{firstInnings}</p>
        <h1 className="s-i">Second Innings</h1>
        <p className="s-i-det">{secondInnings}</p>
        <h1 className="man-of-the-match">Man Of The Match</h1>
        <p className="man-det">{manOfTheMatch}</p>
        <h1 className="ump">Umpires</h1>
        <p className="man-det">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
