import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import './styles/global.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;