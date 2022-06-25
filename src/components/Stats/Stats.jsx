import './stats.scss';
import { LocalGroceryStore, Equalizer, AddBox } from '@mui/icons-material';

const Stats = () => {
    return (
        <div className="stats">
            <div className="card">
                <div className="name">Market Cap</div>
                <LocalGroceryStore className="icon" style={{ color: "green" }} />
                <div className="amount">$ {(110545616313).toLocaleString('en-Us')}</div>
            </div>
            <div className="card">
                <div className="name">Volume</div>
                <Equalizer className='icon' style={{ color: "goldenrod" }} />
                <div className="amount">$ {(4514555849.85).toLocaleString('en-Us')}</div>
            </div>
            <div className="card">
                <div className="name">Supply</div>
                <AddBox className='icon' style={{ color: "violet" }} />
                <div className="amount">17373875</div>
            </div>
        </div>
    );
}

export default Stats;