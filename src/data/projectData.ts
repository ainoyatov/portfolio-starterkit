export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [

    {
        title: 'Picture Framing Shop',
        description: 'Local picture framing shop in Scottsdale, AZ — offering custom framing, canvas stretching, shadowboxes, conservation framing, and art installation with expert craftsmanship and trusted service.',
        image: '/projects/project_0.png',
        url: 'https://artandcustomframes.com'
    },

    {
        title: 'Realty Company',
        description: 'Texas-based company specializing in buying and selling homes, featuring property listings, seller inquiry tools, and resources tailored to meet the needs of both homeowners and investors.',
        image: '/projects/project_2.png',
        url: 'https://otinvestmentgroup.com'
    },

    {
        title: 'Masonry & Landscaping Services',
        description: 'We offer expert masonry and landscaping services with a focus on custom gabion features. From retaining walls to decorative accents, we create durable, natural solutions that enhance any outdoor space.',
        image: '/projects/project_3.png',
        url: 'https://otinvestmentgroup.com'
    },

    {
        title: 'Investment Commpany',
        description: 'Trusted Arizona realty company specializing in buying and selling homes, offering property listings, market insights, and personalized services for both buyers and sellers across Arizona communities.',
        image: '/projects/project_1.png',
        url: 'https://uncharted-ventures.com'
    },
    
];