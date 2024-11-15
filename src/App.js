import Header from './components/Header.jsx'
import Screen from './components/Screen.jsx'
import './App.css';
import Faq from './components/Faq.jsx';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={
            <>
              <Screen/>
              <Faq/>
            </>
          }/>
        </Routes>
      
    </div>
  );
}

export default App;
