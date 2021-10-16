import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home.js'
import Blog from './components/Blog.js'
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
