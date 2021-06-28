import './styles/global.css';
import HomeComponent from './components/major_components/HomeComponent';
import Header from './components/Header';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomeComponent />
      </div>
    </Router>
  );
}

export default App;
