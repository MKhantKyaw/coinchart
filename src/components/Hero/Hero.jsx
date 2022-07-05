import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './hero.scss'


const header = ["Rank", "Name", "Price", "24h Change"]

const Hero = () => {
    const url = process.env.REACT_APP_URL + '&limit=5';
    console.log(url)
    const { data, loading } = useFetch(url)
    return (
        <div className="hero">
            <div className="title">
                Choose your best crypto wallet in CoinChart
            </div>
            <Cards />
            <div className="title">Top Ranking Coins</div>
            <Table header={header} data={data} loading={loading} />
            <Link to="/price"><button>See More</button></Link>
        </div>
    );
}

export default Hero;