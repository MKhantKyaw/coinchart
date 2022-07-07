import { toDate } from '../../Helpers/timeformat';
import './article.scss'

const Article = ({ data }) => {
    return (
        <a className="article" href={data.link}>
            <img src={data.imgURL} alt="img" />
            <div className="text">
                <p className="date">{toDate(data.feedDate)}</p>
                <p className="title">{data.title}</p>
            </div>
        </a>
    );
}

export default Article;