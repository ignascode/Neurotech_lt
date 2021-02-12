import React from "react";
import {Line} from "react-chartjs-2";
import getData from "../getData";

const ClusterChart = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		const fetchInterval = setInterval(async () => {
			const fetchedData = await getData();
			setData(fetchedData);
		}, 1000);

		return () => {
			clearInterval(fetchInterval);
		};
	}, []);

	if (!data) return <div>Įjunkite serverį arba palaukite kol bus užkrauti duomenys...</div>;
	const price = data.map((x) => x.price);
	const ids = data.map((x) => x.id);

	const data2 = {
		labels: ids,
		datasets: [
			{
				label: "# of Votes",
				data: price,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<div>
			<Line width={450} height={450} data={data2} options={options} />
		</div>
	);
};
export default ClusterChart;
