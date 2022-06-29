import { Brightness5Outlined, DarkModeOutlined, Close } from '@mui/icons-material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { SidebarContext } from '../../context/sidebarContext';
import './sidebar.scss'

const Sidebar = () => {

    const { handleSidebar, sidebar } = useContext(SidebarContext)
    const { dark, toggleTheme } = useContext(DarkModeContext)

    return (
        <div className={`sidebar ${sidebar ? "show" : "hide"}`}>
            <Close className='close' onClick={handleSidebar} />
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to="/price" style={{ textDecoration: 'none' }}><li>Live Prices</li></Link>
                <Link to="/news" style={{ textDecoration: 'none' }}><li>News</li></Link>
                {
                    dark ?
                        <Brightness5Outlined onClick={toggleTheme} className="icon" /> :
                        <DarkModeOutlined onClick={toggleTheme} className="icon" />

                }
            </ul>
        </div>
    );
}

export default Sidebar;