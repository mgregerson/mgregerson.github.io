import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const {
		logos,
		title,
		description,
		linkText,
		link,
		githubBackend,
		githubBackendText,
		githubFrontend,
		githubFrontendText,
	} = props;

	console.log("title in project=", title, "logos in project=", logos);
	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logos">
						{logos.map((logo) => (
							<div className="project-logo" key={logo}>
								<img src={logo} alt="logo" />
							</div>
						))}
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					{link && (
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<Link to={link}>
								<div className="project-link-text">
									{linkText}
								</div>
							</Link>
						</div>
					)}
					{githubFrontend && (
						<div className="project-github">
							<div className="project-github-icon">
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<Link to={githubFrontend}>
								<div className="project-github-text">
									{githubFrontendText}
								</div>
							</Link>
						</div>
					)}
					{githubBackend && (
						<div className="project-github">
							<div className="project-github-icon">
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<Link to={githubBackend}>
								<div className="project-github-text">
									{githubBackendText}
								</div>
							</Link>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
