import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";

class Home extends Component {
	state = {
		searchTerm: "",
		startYear: "",
		endYear: "",
		articles: [],
		savedArticles: []
	};
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getNYTArticles(this.state.searchTerm, this.state.beginYear, this.state.endYear)
    //API.getNYTArticles()
      .then(res => {
        console.log(res);
        this.setState({ articles: res.data.response.docs });
      })
      .catch(err => console.log(err));
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
								<Input
									name="searchTerm"
									value={this.state.searchTerm}
									onChange={this.handleInputChange}
									placeholder="Search Term"
								/>
								<Input
									name="beginYear"
									value={this.state.beginYear}
									onChange={this.handleInputChange}
									placeholder="Begin Year"
								/>
								<Input
									name="endYear"
									value={this.state.endYear}
									onChange={this.handleInputChange}
									placeholder="End Year"
								/>
								<Button
									onClick={this.handleFormSubmit}
									type="success"
									className="input-lg"
								>
									Search
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
