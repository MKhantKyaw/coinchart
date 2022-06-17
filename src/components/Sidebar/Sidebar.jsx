import { Brightness5Outlined, DarkModeOutlined, Close } from '@mui/icons-material';
import './sidebar.scss'

const Sidebar = ({ dark, handleDark, sidebar, handleSidebar }) => {

    return (
        <div className={`sidebar ${sidebar ? "show" : "hide"}`}>
            <Close className='close' onClick={handleSidebar} />
            <ul>
                <li>Home</li>
                <li>Live Prices</li>
                <li>News</li>
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