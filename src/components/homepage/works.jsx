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
								src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/anbphcqyc9bqn5vhorog"
								alt="Tapply"
								className="work-image"
							/>
							<div className="work-title">Tapply</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">2023</div>
						</div>
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
								src="https://media.licdn.com/dms/image/C4D0BAQH9J5zzA64YVA/company-logo_200_200/0/1660832645705/jordache_enterprises_inc_logo?e=2147483647&v=beta&t=HHwiIeZIcGEgEoMoqKb3AEbwIQSg0st8KC58lnV0Jpk"
								alt="Jordache"
								className="work-image"
							/>
							<div className="work-title">Jordache Enterprises</div>
							<div className="work-subtitle">Web Developer</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
						<div className="work">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/b/b1/NYC_DOE_Logo.png"
								alt="NYCDOE"
								className="work-image"
							/>
							<div className="work-title">PS 89</div>
							<div className="work-subtitle">ESL Teacher</div>
							<div className="work-duration">2015 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
