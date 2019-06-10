import React from 'react';
import { connect } from 'react-redux';
import add from "../actions/add"
import remove from "../actions/remove"

const mapStateToProps = (state, ownProps) => ({
  tweets: state.tweets,
});

const TweetItem = ({ data }) => (
  <li>
    <span>{data.message}</span>
  </li>
);

const TweetsList = ({ tweets, dispatch }) => (  
  <div>

    <ul style={{ listStyle: 'none', padding: 0 }} >
      {
        tweets.map(p => <TweetItem key={p.id} data={p} /> )
      }
    </ul>

    <form onSubmit={elm => {
      elm.preventDefault();
      dispatch(add(elm.target.tweet.value));
        elm.target.tweet.value = "";
        // console.log(props.tweets)
      }}>

      <input type="text" name="tweet" />
      
    </form>
  </div>
);

export default connect(mapStateToProps)(TweetsList);