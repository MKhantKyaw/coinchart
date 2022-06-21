import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import './styles/global.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;