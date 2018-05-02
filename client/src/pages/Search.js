import React from "react";

const Search = props => (
	<div className="container">
		<div className="card">
			<h5 className="card-header">Search Parameters</h5>
			<div className="card-body">
				<form>
					<div className="form-group">
						<label htmlFor="searchTerm">Topic</label>
						<input
							id="topic"
							className="form-control"
							type="text"
							placeholder="Search Term"
							name="searchTerm"
							onChange={props.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="startYear">Start Year</label>
						<input
							id="startYear"
							className="form-control"
							type="text"
							placeholder="Begin Year"
							name="beginYear"
							onChange={props.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="endYear">End Year</label>
						<input
							id="endYear"
							className="form-control"
							type="text"
							placeholder="End Year"
							name="endYear"
							onChange={props.handleInputChange}
						/>
					</div>
					<button
						onClick={props.handleFormSubmit}
						type="submit"
						className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>
)

export default Search;