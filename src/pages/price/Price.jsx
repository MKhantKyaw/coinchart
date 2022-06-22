import Tab from '../../components/Tab/Tab';
import './price.scss'

const Price = () => {
    return (
        <div className="price">

            <div className="top">
                <div className="title">
                    Track Coin Price in the Market
                </div>
                <div className="letter">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus, modi esse, neque nostrum amet est praesentium recusandae molestiae veritatis sunt corporis atque? Cupiditate deleniti obcaecati, doloribus quibusdam maxime quidem.</div>
            </div>
            <div className="bottom">
                <Tab />
            </div>
        </div>
    );
}

export default Price;