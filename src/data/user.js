const INFO = {
	main: {
		title: "MG",
		name: "Matt Gregerson",
		email: "mgregerson4321@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/mgregerson",
		linkedin: "https://www.linkedin.com/in/matthewgregerson/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Matt Gregerson: Software engineer",
		description:
			"I am a fullstack developer with a love for learning new technologies. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer. Test first - ask questions later!",
	},

	about: {
		title: "I'm Matt Gregerson, a full-stack software engineer, gaming nerd, and that tall guy in the way at that concert.",
		description:
			"I've worked on a variety of projects and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {},

	projects: [
		{
			title: "Calvin and Jobbes",
			description: `A job postings website in the vein of Indeed. Logged in users
				can search for jobs to apply to, while admin users can post new
				jobs. This was built with a React front-end, Flask backend, and
				a PSQL database. Authentication and security is paramount, with
				different levels of authorization based on admin status.`,
			logos: [
				"https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
				"https://cdn.cdnlogo.com/logos/r/85/react.svg",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
				"https://cdn.iconscout.com/icon/free/png-256/free-postgresql-11-1175122.png",
			],
			linkText: "Live Demo",
			link: "https://calvin-and-jobbes-mg.surge.sh/",
			githubFrontendText: "Github: Frontend",
			githubFrontend:
				"https://github.com/mgregerson/calvin-and-jobbes-frontend",
			githubBackendText: "Github: Backend",
			githubBackend:
				"https://github.com/mgregerson/calvin-and-jobbes-backend",
		},
		{
			title: "Chirper",
			description: `A social media app inspired by Twitter. Logged in users can post
				"warbles", messages that other users can like. Logged in users
				can follow each other, while admin users have site-wide access
				and functionality. Built using Flask, PSQL, and Jinja templates.`,
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
				"https://cdn.iconscout.com/icon/free/png-256/free-postgresql-11-1175122.png",
			],
			linkText: "Live Demo",
			link: "https://warbler-mg.onrender.com/",
			githubFrontendText: "Github",
			githubFrontend: "https://github.com/mgregerson/chirper-mg",
		},
		{
			title: "ShareBnB",
			description: `ShareBnb: Your ultimate outdoor space rental platform. 
			 ShareBnb revolutionizes the way outdoor spaces are rented and shared. Hosts can easily list their picturesque gardens, 
			 cozy backyards, and unique outdoor areas, setting their own availability and pricing. Built using Python, React, 
			 and Amazon Cloud storage (S3).`,
			logos: [
				"https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
				"https://cdn.cdnlogo.com/logos/r/85/react.svg",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
			],
			githubFrontendText: "Github: Frontend",
			githubFrontend:
				"https://github.com/mgregerson/sharebnb-react/tree/main",
			githubBackendText: "Github: Backend",
			githubBackend: "https://github.com/mgregerson/sharebnb-flask",
		},
	],
};

export default INFO;
