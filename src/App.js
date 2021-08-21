import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Main from './components/Main/Main';
import RightAside from './components/RightAside/RightAside';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-center justify-content-md-between">
            <Header />
            <LeftAside />
            <Main />
            <RightAside />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
