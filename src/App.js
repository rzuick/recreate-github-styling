import './App.css';
import NavigationBar from "./components/NavigationBar";
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';
import HeroSection from './components/Hero';

function App() {
  return (
    <body>
      <main>
        <div className="AllNavigation">
          <NavigationBar />
          <SearchBar />
          <LoginControls />
        </div>
        <HeroSection />
      </main>
    </body>
  );
}

export default App;
