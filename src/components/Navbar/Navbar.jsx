import { Brightness5Outlined, DarkModeOutlined, Menu } from '@mui/icons-material';
import { useContext, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss'
import { DarkModeContext } from '../../context/darkModeContext';
import { SidebarContext } from '../../context/sidebarContext';

const Navbar = () => {

    const { toggleTheme, dark } = useContext(DarkModeContext)
    const { handleSidebar, setSidebar } = useContext(SidebarContext)
    const location = useLocation()

    useEffect(() => {
        setSidebar(false)
        // eslint-disable-next-line 
    }, [location])

    return (
        <>
            <Sidebar />
            <div className="navbar">
                <Menu className="menu" onClick={handleSidebar} />
                <Link to="/" style={{ textDecoration: 'none' }}><div className="title">coinchart</div></Link>
                <ul className="navitems">
                    <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to="/price" style={{ textDecoration: 'none' }}><li>Live Prices</li></Link>
                    <Link to="/news" style={{ textDecoration: 'none' }}><li>News</li></Link>
                    <div className="icon">
                        {
                            dark ?
                                <Brightness5Outlined onClick={toggleTheme} /> :
                                <DarkModeOutlined onClick={toggleTheme} />

                        }
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navbar;