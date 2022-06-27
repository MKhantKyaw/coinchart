import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss'
import Home from "./pages/Home";
import Price from "./pages/price/Price";
import News from "./pages/News";
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div className="app">
            <BrowserRouter >
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="price" element={<Price />} />
                        <Route path="favourites" element={<Price />} />
                        <Route path="news" element={<News />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    );
}

export default App;