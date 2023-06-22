import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/352/original/rslogo.png"
								alt="Rithm School"
								className="work-image"
							/>
							<div className="work-title">Rithm School</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/b/b1/NYC_DOE_Logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">PS 89</div>
							<div className="work-subtitle">ESL Teacher</div>
							<div className="work-duration">2018 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
