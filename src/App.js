import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Aside />
      </div>
    </Router>
  );
};

export default App;
