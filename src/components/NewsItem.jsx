import PropTypes from 'prop-types';
import moment from 'moment';
import '../assets/NewsItem.css';

function NewsItem({ article }) {
  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  return (
    <li className="newsFeed__item">
      <h3 className="newsFeed__article">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>
      <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-start">
        <p className="newsFeed__date">{formatDate(article.publishedAt)}</p>
        <p className="newsFeed__source">{article.source.name}</p>
      </div>
    </li>
  );
}

NewsItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default NewsItem;
