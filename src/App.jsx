import TrafficLights from './components/TrafficLights.jsx';
import './App.css';

function App() {
  return (
    <main className="app">
      <h1>Світлофор</h1>
      <TrafficLights initialOrientation="vertical" />
    </main>
  );
}

export default App;