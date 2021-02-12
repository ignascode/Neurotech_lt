import React from "react";
import NodeMetrics1 from "./NodeMetrics1";
import getData from "../getData";
import * as _ from "lodash";

const ClusterNodeMetrics2 = () => {
	const [data, setData] = React.useState(null);

	const fetchData = async () => {
		const fetchedData = await getData();
		setData(fetchedData);
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	if (!data) return <div>Kraunami duomenys...</div>;

	const dataFromServer = data;
	const groupedByCluster = _.groupBy(dataFromServer, "clusterId");

	return (
		<div>
			{_.map(groupedByCluster, (clusterData, clusterId) => {
				return <NodeMetrics1 clusterData={clusterData} key={clusterId} />;
			})}
		</div>
	);
};
export default ClusterNodeMetrics2;
