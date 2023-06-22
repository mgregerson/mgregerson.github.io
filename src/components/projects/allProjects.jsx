import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

import Card from "../common/card";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						githubBackend={project.githubBackend}
						githubFrontend={project.githubFrontend}
						githubFrontendText={project.githubFrontendText}
						githubBackendText={project.githubBackendText}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
