import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Saved from "./pages/Saved";
import "./App.css";

const App = () => (
	<Router>
		<div>
			<Wrapper>
				<Route exact path="/" component={Home} />
				<br />
				<Route path="/" component={Result} />
				<br />
				<Route path="/" component={Saved} />
			</Wrapper>
		</div>
	</Router>
);

export default App;
