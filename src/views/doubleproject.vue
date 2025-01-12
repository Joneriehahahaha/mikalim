<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'MY PORTFOLIO',
				singleProjectDate: 'December 2024',
				singleProjectTag: 'UI Designer / Full Stack Developer',
			},
			projectImages: [
				{
					id: 1,
					title: '',
					img: require('@/assets/images/me.png'),
				},
                
                
				
				
			],
			projectInfo: {
				clientHeading: 'Contact',
				companyInfos: [
					{
						id: 1,
						title: 'Phone',
						details: '+63 9662540485',
					},
					{
						id: 2,
						title: 'Mail',
						details: '  jonerietabotabo@gmail.com',
					},
					{
						id: 4,  
						title: 'Location',
						details: '  Day-as, Cordova, Cebu',
					},
                    {
						id: 4,  
						title: 'Birthday',
						details: '  April 12, 2002',
					},
                    {
						id: 4,  
						title: 'Place of Birth',
						details: '  Carajay, Lapu-Lapu City, Cebu',
					},
				],
                
				objectivesHeading: 'Education',
				objectivesDetails: [
					{
						school: 'Bachelor of Science and Information Technology (BSIT)',
						year: '2021-2025'
					},
					{
						school: 'Senior High Diploma, Cordova National High School',
						year: '2016-2020'
					},
					{
						school: 'High School Diploma, Cordova National High School',
						year: '2012-2016'
					}
				],
				technologies: [
					{
						title: 'Computer skills',
						techs: [
							'Web Designer',
							'Web Developer',
							'Networking',
							'Operating System',
							
						],
					},
				],
				projectDetailsHeading: 'About Me',
				projectDetails: [
					{
						id: 1,
						details: 'BSIT student with a motivated attitude and a variety of powerful skills. Adept in various social media platform and technology programs. Committed to contributing my expertise in a dynamic office or media production'
					},
					{
						id: 2,
						type: 'experience',
						experiences: [
							{
								role: 'Concentrix - Technical Support representative',
								year: '2023-2024'
							},
							{
								role: 'McDonald\'s - Service crew',
								year: '2019-2020'
							},
							{
								role: 'Service Crew Lantaw Restaurant',
								year: '2016-2017'
							}
						]
					}
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/JonerieJr',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://www.instagram.com/jn.rein/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://www.facebook.com/joneriecute',
					},
                    {
						id: 4,
						name: 'Github',
						icon: 'github',
						url: 'https://github.com/joneriehahahaha',
					},
					
				],
			},
			relatedProject: {
				relatedProjectsHeading: '',
				relatedProjects: [
					
					
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery with side text -->
		<ProjectGallery 
			:projectImages="projectImages" 
			:projectInfo="projectInfo"
		/>

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
