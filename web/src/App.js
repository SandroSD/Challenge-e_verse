import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './hocs/ProtectedRoute';
import Home from './sections/Home';
import Login from './sections/Login';
import SignUp from './sections/SignUp';

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_API;

axios.interceptors.response.use(response => response,
  error => {
  if(error?.response?.status === 400) {
    return Promise.reject(JSON.stringify(error?.response?.data?.message));
  }

  return error;
});

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
