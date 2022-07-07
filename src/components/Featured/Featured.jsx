import Article from '../Article/Article';
import './featured.scss'
import { toDate } from '../../Helpers/timeformat';
const Featured = ({ data, type }) => {

    let items = []
    for (let i = 1; i < data.news.length; i++) {
        items.push(<Article data={data.news[i]} key={i} />)
    }
    return (
        <div className="featured">
            <div className="title">{type === "trending" ? "Featured" : "Latest"}</div>
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
                    {items}
                </div>
            </div>
        </div>
    );
}

export default Featured;