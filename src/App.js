/** @format */

import "./App.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import csvFile from "./matches.csv";
import DisplayBlock from "./components/DisplayBlock";

const App = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		Papa.parse(csvFile, {
			download: true,
			header: true,
			complete: function (results) {
				console.log(results.data);
				setData(results.data);
			},
		});
	}, []);

	return (
		<div>
			<div>
				{data.slice(0, 10).map((item, index) => {
					return (
						<div key={index}>
							<DisplayBlock data={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
