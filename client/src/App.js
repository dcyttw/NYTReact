import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import "./App.css";

const App = () => (
	<Router>
		<div>
			<Wrapper>
				<Route exact path="/" component={Home} />
			</Wrapper>
		</div>
	</Router>
);

export default App;
