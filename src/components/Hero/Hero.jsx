import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './hero.scss'

const data = [
    {
        rank: 1,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 2,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
]

const header = ["Rank", "Name", "Price", "24h Change"]

const Hero = () => {
    return (
        <div className="hero">
            <div className="title">
                Choose your best crypto wallet in CoinChart
            </div>
            <Cards />
            <div className="title">Top Ranking Coins</div>
            <Table header={header} data={data} />
        </div>
    );
}

export default Hero;