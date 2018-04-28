import React, { Component } from "react";

class Home extends Component {
	state = {
		searchTerm: "",
		startYear: "",
		endYear: "",
		articles: [],
		savedArticles: []
	};

	render() {
		return (
			<div>
				<div className="container">
					{/* Jumbotron */}
					<div className="jumbotron">
						<h1 className="text-center"><strong>New York Times Search</strong></h1>
					</div>
				</div>
				<div className="container">
					<div className="card">
						<h5 className="card-header">Search Parameters</h5>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="searchTerm">Search Term</label>
									<input type="text" className="form-control" id="searchTerm" />
								</div>
								<div className="form-group">
									<label htmlFor="startYear">Start Year</label>
									<input type="text" className="form-control" id="startYear" />
								</div>
								<div className="form-group">
									<label htmlFor="endYear">End Year</label>
									<input type="text" className="form-control" id="endYear" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
