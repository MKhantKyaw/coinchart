import Tab from '../../components/Tab/Tab';
import './price.scss'
import Stats from '../../components/Stats/Stats';
import DataTable from '../../components/DataTable/DataTable';
import useFetch from '../../hooks/useFetch';

const Price = () => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100";
    const { data, loading } = useFetch(url)
    if (loading) return <div>loading</div>
    return (
        <div className="price">

            <div className="top">
                <div className="title">
                    Track Coin Price in the Market
                </div>
                <div className="letter">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus, modi esse, neque nostrum amet est praesentium recusandae molestiae veritatis sunt corporis atque? Cupiditate deleniti obcaecati, doloribus quibusdam maxime quidem.</div>
                <Stats data={data} loading={loading} />
            </div>
            <Tab />
            <DataTable data={data} loading={loading} />

        </div>
    );
}

export default Price;