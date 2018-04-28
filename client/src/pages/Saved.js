import React, { Component } from "react";

class Saved extends Component {
	state = {
		savedArticles: []
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="card">
						<h5 className="card-header">Saved Articles</h5>
						<div className="card-body">

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Saved;
