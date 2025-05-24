export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [

    {
        title: 'Investment Commpany',
        description: 'Responsive website for a local cafe with online ordering.',
        image: '/projects/project_1.png',
        url: 'https://uncharted-ventures.com'
    },
    {
        title: 'Picture Framing Shop',
        description: 'Multi-language blog site built with Next.js and Contentful.',
        image: '/projects/project_0.png',
        url: 'https://artandcustomframes.com'
    },
    {
        title: 'Realty Company',
        description: 'Full-featured shop with Stripe integration and product search.',
        image: '/projects/project_2.png',
        url: 'https://otinvestmentgroup.com'
    },
];