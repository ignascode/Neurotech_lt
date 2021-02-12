import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ClusterNodeMetrics2 from "./components/ClusterNodeMetrics2";
import {Container, Box} from "@material-ui/core";

ReactDOM.render(
	<React.StrictMode>
		<div>
			<Container maxWidth="xs">
				<Box padding={5}>Cluster Node Metrics</Box>
			</Container>
			<ClusterNodeMetrics2 />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
