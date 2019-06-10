// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import TweetsList from './components/TweetsList'
import store from "./store/";

const App = () => <TweetsList store={store} />

export default hot(module)(App)