import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss'
import Home from "./pages/Home";
import Price from "./pages/price/Price";
import News from "./pages/news/News";
import Footer from './components/Footer/Footer'
import ScrollToTop from "./Helpers/ScrolltoTop";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter >
                <Navbar />
                <ScrollToTop>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="price" >
                                <Route index element={<Price />} />
                                <Route path="fiat" element={<Price />} />
                            </Route>

                            <Route path="news">
                                <Route index element={<News />} />
                                <Route path="trending" element={<News />} />
                                <Route path="latest" element={<News />} />
                            </Route>
                        </Route>
                    </Routes>
                </ScrollToTop>
                <Footer />
            </BrowserRouter>
        </div>

    );
}

export default App;