export interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    titleKey: 'Project_0_Title',
    descriptionKey: 'Project_0_Description',
    image: '/projects/project_0.png',
    url: 'https://artandcustomframes.com'
  },
  {
    titleKey: 'Project_1_Title',
    descriptionKey: 'Project_1_Description',
    image: '/projects/project_2.png',
    url: 'https://otinvestmentgroup.com'
  },
  {
    titleKey: 'Project_2_Title',
    descriptionKey: 'Project_2_Description',
    image: '/projects/project_3.png',
    url: 'https://otinvestmentgroup.com'
  },
  {
    titleKey: 'Project_3_Title',
    descriptionKey: 'Project_3_Description',
    image: '/projects/project_1.png',
    url: 'https://uncharted-ventures.com'
  }
];