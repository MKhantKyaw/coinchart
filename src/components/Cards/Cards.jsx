import './cards.scss'
import coinbase from '../../assets/coinbase.jpg'
import meta from '../../assets/metamask.png'
import binance from '../../assets/binance.png'
import { ArrowForward } from '@mui/icons-material'



const Cards = () => {
    return (
        <div className="cards">
            <div className="card">
                <img src={coinbase} alt="coinbase" className="coinbase" />
                <p>Coinbase</p>
                <ArrowForward className="icon" />
            </div>
            <div className="card">
                <img src={meta} alt="metamask" className="meta" />
                <p>MetaMask</p>
                <ArrowForward className="icon" />
            </div>
            <div className="card">
                <img src={binance} alt="binance" className="binance" />
                <p>Binance</p>
                <ArrowForward className="icon" />
            </div>
        </div>
    );
}

export default Cards;