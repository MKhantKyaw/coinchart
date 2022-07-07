import { NavLink } from 'react-router-dom';
import './tab.scss'

const Tab = () => {
    return (
        <div className="tab">
            <ul>
                <NavLink to="/news" end className={({ isActive }) => (isActive ? "active link" : "not_active link")}>Featured</NavLink>
                <NavLink to="/news/latest" className={({ isActive }) => (isActive ? "active link" : "not_active link")}>Latest</NavLink>
            </ul>
        </div>
    );
}

export default Tab;