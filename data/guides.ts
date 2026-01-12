
export interface Guide {
    id: string;
    name: string;
    role: string;
    shortDescription: string;
    imageUrl: string;
    imageUrlHover?: string;
    longDescription?: string;
    expertise?: string[];
    quote?: string;
}

export const guidesData: Guide[] = [
    {
        id: '1',
        name: 'Sarah L.',
        role: 'Directrice Pédagogique',
        shortDescription: 'Expertise : Ingénierie de la formation & Andragogie.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
        imageUrlHover: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
        longDescription: "Passionnée par la transmission du savoir, Sarah conçoit nos parcours de formation avec une approche centrée sur l'apprenant. Elle traduit les concepts juridiques complexes en outils pratiques et accessibles pour tous les collaborateurs.",
        expertise: ['Ingénierie Pédagogique', 'Andragogie', 'Gamification', 'Formation de formateurs'],
        quote: "Apprendre, cest vouloir évoluer. Mon rôle est de rendre cette évolution naturelle et stimulante."
    },
    {
        id: '2',
        name: 'Marc D.',
        role: 'Expert Conformité & Sapin II',
        shortDescription: 'Expertise : Cartographie des risques & Dispositifs d\'alerte.',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
        imageUrlHover: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop',
        longDescription: "Avec plus de 15 ans d'expérience en compliance bancaire et industrielle, Marc apporte une rigueur technique inébranlable aux missions de cartographie des risques. Il accompagne les directions juridiques dans la sécurisation de leurs processus.",
        expertise: ['Loi Sapin II', 'Due Diligence', 'Cartographie des risques', 'Audit interne'],
        quote: "La conformité n'est pas une contrainte, c'est le cadre qui permet la performance durable."
    },
    {
        id: '3',
        name: 'Élise M.',
        role: 'Psychologue du Travail',
        shortDescription: 'Expertise : Droit d\'alerte & Risques psychosociaux.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
        imageUrlHover: 'https://images.unsplash.com/photo-1598550832205-d5e2330a13dd?q=80&w=600&auto=format&fit=crop',
        longDescription: "Spécialiste des dynamiques humaines en entreprise, Élise intervient sur le volet psychosocial des dispositifs d'alerte. Elle s'assure que la libération de la parole se fait dans un cadre sécurisant et bienveillant pour les lanceurs d'alerte.",
        expertise: ['Psychologie du travail', 'Gestion de crise', 'Écoute active', 'Médiation'],
        quote: "Derrière chaque procédure, il y a des humains. Protéger l'organisation, c'est d'abord prendre soin d'eux."
    }
];
