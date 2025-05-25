export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [

    {
        title: 'Investment Commpany',
        description: 'Tailored web solution for a trusted Arizona realty company specializing in buying and selling homes, featuring property listings, market insights, and tools for both buyers and sellers — all tailored to the unique needs of Arizona communities.',
        image: '/projects/project_1.png',
        url: 'https://uncharted-ventures.com'
    },
    {
        title: 'Picture Framing Shop',
        description: 'Mobile-friendly eCommerce site for a local picture framing shop in Scottsdale, AZ — featuring custom framing, canvas stretching, shadowboxes, conservation framing, and art installation, with easy online browsing and local service excellence.',
        image: '/projects/project_0.png',
        url: 'https://artandcustomframes.com'
    },
    {
        title: 'Realty Company',
        description: 'Responsive website for a Texas-based company specializing in buying and selling homes, featuring property listings, seller inquiry tools, and dynamic content management through Contentful.',
        image: '/projects/project_2.png',
        url: 'https://otinvestmentgroup.com'
    },
];