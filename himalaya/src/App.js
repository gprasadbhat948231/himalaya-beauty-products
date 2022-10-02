import './App.css';
import HomePage from './Pages/Home';
import Navbar from './Pages/Navbar';
import Allroutes from './Pages/Allroutes';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
            <Navbar/>
            <Allroutes/>
            <Footer/>
    </div>
  );
}

export default App;
