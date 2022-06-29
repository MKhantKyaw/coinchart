import Tab from '../../components/Tab/Tab';
import './price.scss'
import Stats from '../../components/Stats/Stats';
import DataTable from '../../components/DataTable/DataTable';
import useFetch from '../../hooks/useFetch';
import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted';
import { useRef } from 'react';

const Price = () => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100";
    const { data, loading } = useFetch(url)
    const scroll = useRef(null)

    if (loading) return (
        <div className="price">
            <SpinnerDotted color='#0057FF' style={{ margin: '300px 200px' }} />
        </div>
    )
    return (
        <div className="price" ref={scroll}>

            <div className="top">
                <div className="title">
                    Track Coin Price in the Market
                </div>
                <div className="letter">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus, modi esse, neque nostrum amet est praesentium recusandae molestiae veritatis sunt corporis atque? Cupiditate deleniti obcaecati, doloribus quibusdam maxime quidem.</div>
                <Stats data={data} />
            </div>
            <Tab />
            <DataTable data={data} scroll={scroll} />

        </div>
    );
}

export default Price;