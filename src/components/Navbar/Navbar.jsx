import { Brightness5Outlined, DarkModeOutlined, Menu } from '@mui/icons-material';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './navbar.scss'

const Navbar = () => {
    const [dark, setDark] = useState(true)
    const [sidebar, setSidebar] = useState(false)

    const handleDark = () => {
        setDark(!dark)
    }

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <Sidebar dark={dark} handleDark={handleDark} handleSidebar={handleSidebar} sidebar={sidebar} />
            <div className="navbar">
                <Menu className="menu" onClick={handleSidebar} />
                <div className="title">coinchart</div>
                <ul className="navitems">
                    <li>Home</li>
                    <li>Live Prices</li>
                    <li>News</li>
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