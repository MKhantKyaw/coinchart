import './news.scss'
import Tab from '../../components/Tab/Tab'
import Featured from '../../components/Featured/Featured';
import NewsSection from '../../components/NewsSection/NewsSection';

const News = () => {
    return (
        <div className="news">
            <Tab />
            <div className="sections">
                <Featured />
                <NewsSection />
                <NewsSection />
            </div>
        </div>
    );
}

export default News;