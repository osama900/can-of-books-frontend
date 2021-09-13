import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookInfo from "./component/BookInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />

          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <BookInfo />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
