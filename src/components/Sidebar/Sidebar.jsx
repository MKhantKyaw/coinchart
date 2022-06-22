import { Brightness5Outlined, DarkModeOutlined, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './sidebar.scss'

const Sidebar = ({ dark, handleDark, sidebar, handleSidebar }) => {

    return (
        <div className={`sidebar ${sidebar ? "show" : "hide"}`}>
            <Close className='close' onClick={handleSidebar} />
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to="/price" style={{ textDecoration: 'none' }}><li>Live Prices</li></Link>
                <Link to="/news" style={{ textDecoration: 'none' }}><li>News</li></Link>
                {
                    dark ?
                        <Brightness5Outlined onClick={handleDark} className="icon" /> :
                        <DarkModeOutlined onClick={handleDark} className="icon" />

                }
            </ul>
        </div>
    );
}

export default Sidebar;