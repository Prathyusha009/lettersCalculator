import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    userInput: '',
  }

  lengthofinput = event => this.setState({userInput: event.target.value})
  render() {
    const {userInput} = this.state
    return (
      <div className="main-con">
        <div className="con">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label for="inputid" className="par">
            Enter the phrase
          </label>
          <input
            id="inputid"
            type="text"
            placeholder="Enter your phrase"
            onChange={this.lengthofinput}
            className="input"
          />

          <p className="para">No.of letters: {userInput.length}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
