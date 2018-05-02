import React from "react";

const Result = props => (
	<div>
		<h4>
			<span><strong>{props.title}</strong></span>
			<span className="btn-group float-right">
				<a href={props.url} target="_blank">
					<button className="btn btn-default">View Article</button>
				</a>
				<button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
			</span>
		</h4>
		<p>Date Published: {props.date}</p>
	</div>
);

export default Result;