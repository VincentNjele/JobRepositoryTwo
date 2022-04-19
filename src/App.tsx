
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ComponentsHolder } from './components/ComponentsHolder';
import { DetailsPage } from './components/DetailsPage';

function App() {



  return (

    <Router>
      <Routes>
        <Route path='/' element={<ComponentsHolder />} />
        <Route path='DetailsPage/:id' element={<DetailsPage />} />
      </Routes>
    </Router>




  );
}

export default App;
