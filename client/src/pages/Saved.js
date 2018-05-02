import React from "react";

const Saved = props => (
	<div>
		<h4>
			<span><strong>{props.title}</strong></span>
			<span className="btn-group float-right">
				<a href={props.url} target="_blank">
					<button className="btn btn-default">View Article</button>
				</a>
				<button className="btn btn-danger" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
			</span>
		</h4>
		<p>Date Published: {props.date}</p>
	</div>
)

export default Saved;