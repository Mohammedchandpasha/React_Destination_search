// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="home-container">
          <h1>Destination Search</h1>
          <div className="search-bar-container">
            <input
              type="search"
              placeholder="search"
              className="search"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="logo"
            />
          </div>
          <div className="Countries">
            <ul className="list-container">
              {searchResults.map(eachRes => (
                <DestinationItem
                  destinationDetails={eachRes}
                  key={eachRes.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
