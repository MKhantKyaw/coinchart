import './stats.scss';
import { LocalGroceryStore, Equalizer, AddBox } from '@mui/icons-material';

const Stats = ({ data, loading }) => {
    if (loading) {
        return <div>loading</div>
    }
    return (
        <div className="stats">
            <div className="card">
                <div className="name">Market Cap</div>
                <LocalGroceryStore className="icon" style={{ color: "green" }} />
                <div className="amount">$ {(data.coins[0].marketCap).toLocaleString('en-Us')}</div>
            </div>
            <div className="card">
                <div className="name">Volume</div>
                <Equalizer className='icon' style={{ color: "goldenrod" }} />
                <div className="amount">$ {(data.coins[0].volume).toLocaleString('en-Us')}</div>
            </div>
            <div className="card">
                <div className="name">Supply</div>
                <AddBox className='icon' style={{ color: "violet" }} />
                <div className="amount">{data.coins[0].totalSupply}</div>
            </div>
        </div>
    );
}

export default Stats;