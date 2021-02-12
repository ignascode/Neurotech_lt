import React from "react";
import {Grid, Container, Box} from "@material-ui/core";
import * as _ from "lodash";

const NodeMetrics1 = ({clusterData}) => {
	const counts = clusterData ? _.countBy(clusterData, "stage") : null;

	return (
		<div>
			<Container maxWidth="xs" padding={2}>
				<Box border={1}>
					Node Metrics
					<Grid container spacing={2} direction="row" justify="center" alignItems="center">
						<Grid item xs>
							<Grid>{counts.RUNNING}</Grid>
							<Grid>Running</Grid>
							<Grid>{!counts.WAITING ? 0 : counts.WAITING}</Grid>
							<Grid>Waiting</Grid>
						</Grid>
						<Grid item xs>
							<Grid>{counts.LOADING}</Grid>
							<Grid>Loading</Grid>
						</Grid>
						<Grid item xs>
							<Grid>{clusterData.length}</Grid>
							<Grid>Total</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};
export default NodeMetrics1;
