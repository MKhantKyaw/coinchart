import './news.scss'
import Tab from '../../components/Tab/Tab'
import Featured from '../../components/Featured/Featured';
import useFetch from '../../hooks/useFetch';
import { SpinnerDotted } from 'spinners-react';

const News = ({ type }) => {
    const url = process.env.REACT_APP_NEWS_URL + type + "?skip=0&limit=5";
    const { data, loading } = useFetch(url)

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '500px' }} >
            <SpinnerDotted color='#0057FF' />
        </div>
    )
    return (
        <div className="news">
            <Tab />

            <Featured data={data} type={type} />
        </div>
    );
}

export default News;