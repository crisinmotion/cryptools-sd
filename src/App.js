import logo from './assets/images/SteelDemonLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{margin: '0 auto', width: 150, padding: '10px 20px', backgroundColor: '#ffffff', borderRadius: '50%'}}><img src={logo} alt="Cryptools by SteelDemon" style={{width: '100%', maxWidth: 100}}/></div>
        <h1>Welcome to Cryptools!</h1>
				<h5>Awesome features coming soon...</h5>
      </header>
    </div>
  );
}

export default App;
