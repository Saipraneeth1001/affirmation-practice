import React from "react";

import TweetButton from "./TweetComponent";
import { getRandomQuote } from "./utils/QuoteService";

import "./App.css";
import TypeComponent from "./components/TypeComponent";

class AffirmationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      affirmation: getRandomQuote()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ affirmation: getRandomQuote() });
  }

  render() {
    const affirmation = this.state.affirmation;
    return (
      <div className="Affirmation">
        <div className="quote">
          <blockquote>{affirmation.affirmation}</blockquote>
          {/* <p className="author-citation">{affirmation.author}</p> */}
        </div>

        <div className="Navigation">
          {/* <button onClick={this.handleClick}>Next Affirmation</button> */}
          {/* <TweetButton
            affirmation={affirmation.affirmation}
            author={affirmation.author}
          /> */}
          <TypeComponent affirmation = {affirmation.affirmation} />
        </div>
        <br />
        
      </div>
    );
  }
}

export default AffirmationComponent;
