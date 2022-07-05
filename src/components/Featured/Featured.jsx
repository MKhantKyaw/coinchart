import Article from '../Article/Article';
import './featured.scss'
import useFetch from '../../hooks/useFetch'
import { toDate } from '../../Helpers/timeformat';
const Featured = () => {

    const url = "https://api.coinstats.app/public/v1/news/trending?skip=0&limit=1";
    const { data } = useFetch(url)

    // console.log(data.news[0])
    return (
        data &&
        <div className="featured">
            <div className="title">Featured</div>
            <div className="articles">

                <div className="heading">
                    <a href={data.news[0].link}>
                        <img src={data.news[0].imgURL} alt="img" />
                        <p className="date">{toDate(data.news[0].feedDate)}</p>
                        <p className="newstitle">{data.news[0].title}</p>
                        <p className="description">{data.news[0].description}</p>
                    </a>
                </div>

                <div className="sidenews">
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    );
}

export default Featured;