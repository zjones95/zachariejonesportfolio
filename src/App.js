import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
