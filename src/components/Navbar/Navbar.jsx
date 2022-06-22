import { Brightness5Outlined, DarkModeOutlined, Menu } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
    const [dark, setDark] = useState(true)
    const [sidebar, setSidebar] = useState(false)
    const location = useLocation()
    const handleDark = () => {
        setDark(!dark)
    }

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    useEffect(() => {
        setSidebar(false)
    }, [location])

    return (
        <>
            <Sidebar dark={dark} handleDark={handleDark} handleSidebar={handleSidebar} sidebar={sidebar} />
            <div className="navbar">
                <Menu className="menu" onClick={handleSidebar} />
                <div className="title">coinchart</div>
                <ul className="navitems">
                    <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to="/price" style={{ textDecoration: 'none' }}><li>Live Prices</li></Link>
                    <Link to="/news" style={{ textDecoration: 'none' }}><li>News</li></Link>
                    <div className="icon">
                        {
                            dark ?
                                <Brightness5Outlined onClick={handleDark} /> :
                                <DarkModeOutlined onClick={handleDark} />

                        }
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navbar;