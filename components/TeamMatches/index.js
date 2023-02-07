import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamBg: '', latestMatch: {}, recentMatches: []}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDet = data.latest_match_details
    const recentMatchDet = data.recent_matches
    const formattedLatestMatch = {
      umpires: latestMatchDet.umpires,
      result: latestMatchDet.result,
      manOfTheMatch: latestMatchDet.man_of_the_match,
      id: latestMatchDet.id,
      date: latestMatchDet.date,
      venue: latestMatchDet.venue,
      competingTeam: latestMatchDet.competing_team,
      competingTeamLogo: latestMatchDet.competing_team_logo,
      firstInnings: latestMatchDet.first_innings,
      secondInnings: latestMatchDet.second_innings,
      matchStatus: latestMatchDet.match_status,
    }
    const formatRecentMatch = recentMatchDet.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      isLoading: false,
      latestMatch: formattedLatestMatch,
      recentMatches: formatRecentMatch,
      teamBg: data.team_banner_url,
    })
  }

  renderMatchCard = () => {
    const {recentMatches} = this.state
    return recentMatches.map(each => <MatchCard item={each} key={each.id} />)
  }

  renderDet = () => {
    const {teamBg, latestMatch} = this.state
    return (
      <div className="card">
        <img src={teamBg} alt="team banner" className="img" />
        <h1 className="latest">Latest Matches</h1>
        <div className="latest-c">
          <LatestMatch det={latestMatch} />
        </div>
        <ul className="list-cont1">{this.renderMatchCard()}</ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`bg ${id}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderDet()
        )}
      </div>
    )
  }
}
export default TeamMatches
