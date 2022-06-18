import Cards from '../Cards/Cards';
import './hero.scss'

const data = [
    {
        rank: 1,
        icon: "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f3738cc5df5f59afb57111d67d951170_1.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 2,
        icon: "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f3738cc5df5f59afb57111d67d951170_1.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f3738cc5df5f59afb57111d67d951170_1.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
]
const Hero = () => {
    return (
        <div className="hero">
            <div className="title">
                Choose your best crypto wallet in CoinChart
            </div>
            <Cards />
            <div className="title">Top Ranking Coins</div>

        </div>
    );
}

export default Hero;