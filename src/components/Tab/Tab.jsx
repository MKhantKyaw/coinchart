import { NavLink } from 'react-router-dom';
import './tab.scss'

const Tab = () => {
    return (
        <div className="tab">
            <ul>
                <NavLink to="/price" className={({ isActive }) => (isActive ? "active link" : "not_active link")}>Price</NavLink>
                <NavLink to="/favourites" className={({ isActive }) => (isActive ? "active link" : "not_active link")}>Favourites</NavLink>
            </ul>
        </div>
    );
}

export default Tab;