// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Capstone Project',
		category: 'Application',
		img: require('@/assets/images/COOP.png'),
		link: '/projects/single-project'
	},
	{
		id: 2,
		title: 'My Resume',
		category: 'Application',
		img: require('@/assets/images/xx.jpg'),
		link: '/doubleproject'
	},
	{
		id: 3,
		title: 'Pixel Developer',
		category: 'Application',
		img: require('@/assets/images/paldo.jpg'),
		link: '/projects/ohlok'
	},
	
	
	
];

export default projects;
