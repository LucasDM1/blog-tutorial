import React from "react";
import { Navbar } from "./navbar";
import { Homepage } from "./homepage";

//create your first component
export function Home() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Homepage />
			</div>
		</div>
	);
}
