import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />}/>
          <Route path="/results" element={<ResultsPage />}/>
          <Route path='*' element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
