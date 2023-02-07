import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, iplList: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const team = data.teams
    const formatData = team.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(formatData)
    this.setState({iplList: formatData, isLoading: false})
  }

  render() {
    const {isLoading, iplList} = this.state

    return (
      <div className="ipl-home-cont">
        <div className="card">
          <div className="head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl"
            />
            <h1 className="title">Ipl Dashboard</h1>
          </div>
          <div>
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              <ul className="list-cont">
                {iplList.map(item => (
                  <TeamCard item={item} key={item.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
