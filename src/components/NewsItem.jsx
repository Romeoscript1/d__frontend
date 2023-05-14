import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../assets/NewsItem.css';

class NewsItem extends Component {
	formatDate(date) {
		return moment(date).format('DD/MM/YYYY');
	}

	render() {
		let article = this.props.article;
		return (
			<li className="newsFeed__item">
				<h3 className="newsFeed__article"><a href={article.url} target="_blank">{article.title}</a></h3>
				<div className=" flex flex-col items-center justify-start md:flex-row text-[black]">
					<p className="newsFeed__date">{this.formatDate(article.publishedAt)}</p>
					<p className="newsFeed__source">{article.source.name}</p>
				</div>
			</li>
		)
	}
}

NewsItem.propTypes = {
	article: PropTypes.object
};

export default NewsItem;
