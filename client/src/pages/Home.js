import React, { Component } from "react";
import Search from "./Search";
import Results from "./Result";
import Saved from "./Saved";
import API from "../utils/API";

class Home extends Component {
	state = {
		searchTerm: "",
		beginYear: "",
		endYear: "",
		articles: [],
		savedArticles: []
	};

	// When the component mounts, list all saved articles and update this.state.savedArticles
	componentDidMount() {
		this.getSavedArticles()
	}

	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, get NYT article and update this.state.articles
		event.preventDefault();
		API.getNYTArticles(this.state.searchTerm, this.state.beginYear, this.state.endYear)
		//API.getNYTArticles()
		.then(res => {
			console.log(res);
			this.setState({ articles: res.data.response.docs });
		})
		.catch(err => console.log(err));
	};

	// When save button is clicked, add article to db
	handleSaveButton = (id) => {
		const findArticleByID = this.state.articles.find((article) => article._id === id);
		const newSavedArticle = { title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url };
		API.saveArticle(newSavedArticle)
		.then(this.getSavedArticles());
	}

	// When delete button is clicked, remove article from db
	handleDeleteButton = (id) => {
		API.deleteArticle(id)
		.then(this.getSavedArticles());
	}

	// Getting saved articles from the db
	getSavedArticles = () => {
		API.getArticle()
		.then((res) => {
			this.setState({ savedArticles: res.data });
		});
	}

	render() {
		return (
			<div>
				<div className="container">
					{/* Jumbotron */}
					<div className="jumbotron">
						<h1 className="text-center"><strong>New York Times Search</strong></h1>
					</div>
				</div>
				{/* Search Page */}
				<Search
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<br />
				{/* Result Page */}
				<div className="container">
					<div className="card">
						<h5 className="card-header">Search Results</h5>
						<div className="card-body">
							{!this.state.articles.length ? (
								<h4 className="text-center">No Search Result to Display</h4>
							) : (
								this.state.articles.map(article => (
									<Results
										_id={article._id}
										key={article._id}
										title={article.headline.main}
										date={article.pub_date}
										url={article.web_url}
										handleSaveButton={this.handleSaveButton}
										getSavedArticles={this.getSavedArticles}
									/>
								))
							)}
						</div>
					</div>
				</div>
				<br />
				{/* Saved Page */}
				<div className="container">
					<div className="card">
						<h5 className="card-header">Saved Articles</h5>
						<div className="card-body">
							{!this.state.savedArticles.length ? (
								<h4 className="text-center">No Saved Articles to Display</h4>
							) : (
								this.state.savedArticles.map(savedArticle => (
									<Saved
										_id={savedArticle._id}
										key={savedArticle._id}
										title={savedArticle.title}
										date={savedArticle.date}
										url={savedArticle.url}
										handleDeleteButton={this.handleDeleteButton}
										getSavedArticles={this.getSavedArticles}
									/>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;