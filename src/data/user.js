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
			"Welcome to my website! I'm a native New Englander who now calls New York City home. As a former teacher turned software engineer, I thrive on the daily challenges and continuous learning that both professions offer. Beyond my professional endeavors, I find joy in attending shows with my wife and friends, building computers for gaming, and playing sports. Whether it's the excitement of that legendary live performance, the satisfaction of optimizing software and hardware, or the thrill of friendly competition, I embrace diverse passions. If you ever feel like checking out a show, playing some Diablo IV, or just want to chat, feel free to reach out!",
	},

	articles: {},

	projects: [
		{
			title: "Verba Vista",
			description: `A multilingual messaging platform that enables users to compose messages in their native language and seamlessly translate them into a language of the other user’s choice. Built in Typescript and Next.JS, coupled with Stripe for secure payment processing and Firestore for cloud-based database management.`,
			logos: [
				"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
				"https://cdn.cdnlogo.com/logos/r/85/react.svg",
				"https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png",
				"https://cdn.worldvectorlogo.com/logos/next-js.svg",
			],
			linkText: "Live Demo",
			link: "https://verba-vista.vercel.app/",
			githubFrontendText: "Github",
			githubFrontend:
				"https://github.com/mgregerson/verba-vista",
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
		{
			title: "Codenames",
			description: `Codenames: Now online! Friends can now play their favorite board game
			online with friends! Real-time gameplay powered by Socket.IO websockets,
			a user-friendly interface crafted using React with TypeScript, and a seamless Express API.`,
			logos: [
				"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
				"https://cdn.cdnlogo.com/logos/r/85/react.svg",
				"https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
				"https://cdn.icon-icons.com/icons2/2699/PNG/512/socketio_logo_icon_168806.png",
			],
			githubFrontendText: "Github: Frontend",
			githubFrontend: "https://github.com/mgregerson/codenames-react",
			githubBackendText: "Github: Backend",
			githubBackend: "https://github.com/mgregerson/codenames-express",
		},
	],
};

export default INFO;
