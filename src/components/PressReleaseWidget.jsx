import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NewsItem from './NewsItem';
import '../assets/NewsItem.css';
import Select from 'react-select';
import '../assets/Press.css';

function PressReleaseWidget() {
	const [articles, setArticles] = useState([]);
	const [sources, setSources] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const [selectedSource, setSelectedSource] = useState('');

	useEffect(() => {
		getNews();
		getSources();
	}, []);

	function handleShowMore() {
		if (currentPage < maxPages) {
			setCurrentPage(currentPage + 1);
		}
	}

	function handleChangeSource(selectedOption) {
		setCurrentPage(1);
		setSelectedSource(selectedOption == null ? '' : selectedOption.value);
		setArticles([]);
	}

	function getNews() {
		let newsUrl;
		if (selectedSource === '') {
			newsUrl = `https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&page=${currentPage}&apiKey=17fcb50c25f244a59d6a87fda4730bef`;
		} else {
			newsUrl = `https://newsapi.org/v2/top-headlines?pageSize=5&page=${currentPage}&sources=${selectedSource}&apiKey=17fcb50c25f244a59d6a87fda4730bef`;
		}
		axios.get(newsUrl)
			.then(res => {
				setArticles(prevArticles => [...prevArticles, ...res.data.articles]);
				setMaxPages(Math.ceil(res.data.totalResults / 5));
			})
			.catch(err => console.log(err));
	}

	function getSources() {
		axios.get(`https://newsapi.org/v2/sources?country=gb&apiKey=17fcb50c25f244a59d6a87fda4730bef`)
			.then(res => {
				setSources(res.data.sources.map(source => ({
					value: source.id,
					label: source.name
				})));
			})
			.catch(err => console.log(err));
	}

	return (
		<div className="newsFeed">
			<div className="newsFeed__heading d-flex flex-row align-items-center justify-content-between">
				<h3 className="newsFeed__title">News</h3>
				<Select
					className="newsFeed__sources"
					placeholder="Filter By Source"
					value={selectedSource}
					options={sources.length > 0 ? sources : null}
					onChange={handleChangeSource}
				/>
			</div>
			{articles.length > 0 ? (
				<ul className="newsFeed__list">
					<ReactCSSTransitionGroup
						transitionName="newsItemsTransition"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{articles.map(article => (
							<NewsItem key={article.title} article={article} />
						))}
					</ReactCSSTransitionGroup>
				</ul>
			) : (
				<p className="newsFeed__empty">No news articles were found.</p>
			)}
			<button
				className="newsFeed__more btn btn-primary"
				onClick={handleShowMore}>
				{currentPage === maxPages ? 'No More News' : 'Show More'}</button>
			<p className="newsFeed__sponsor">Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a>.</p>
			</div>
		)
	}


export default PressReleaseWidget;
