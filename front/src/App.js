import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Upload from "./components/layouts/Up";
import Calls from "./components/layouts/Calls";
import Moreinfo from "./components/pages/Moreinfo";
import Messages from "./components/layouts/Messages";
import About from "./components/pages/About";
import Contactsdisplay from "./components/pages/Contactsdisplay";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Errors from "./components/extras/errors";

import ContactState from "./context/contact/cState";
import aState from "./context/auth/AState";
import EaState from "./context/erroralert/EaState";
import "./App.css";

const App = () => {
  return (
    <aState>
      <ContactState>
        <EaState>
          <Router>
            <Fragment>
              <Navbar />
              <Errors />
              <div className='container'>
                <Switch>
                  <Route exact path='/Upload' component={Upload} />
                  <Route exact path='/Messages' component={Messages} />
                  <Route exact path='/Calls' component={Calls} />
                  <Route exact path='/Moreinfo' component={Moreinfo} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Contacts' component={Contactsdisplay} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </EaState>
      </ContactState>
    </aState>
  );
};

export default App;
