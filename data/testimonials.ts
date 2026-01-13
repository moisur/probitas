import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
    {
        id: '1',
        category: "Coaching",
        author: "Ingrid K. – Coaching",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/Probitas_Farah-Zaoui-640b-400x400-1.webp",
        fullText: "Le coaching de Farah Zaoui est ce qu'il vous faut si vous souhaitez avoir une communication impactante sans céder au buzz à tout prix. J'ai travaillé avec elle pendant 2 mois alors que j'avais déjà commencé à publier sur Linkedin. Les résultats sont là : Linkedin est devenu un canal d'acquisition à part entière (je suis désormais sollicitée chaque semaine et une partie des demandes se convertit en dossiers), Une opportunité d'enseignement, Une visibilité accrue en tant qu'experte.",
        words: [
            { text: "Le" }, { text: "coaching" }, { text: "de" }, { text: "Farah", style: 'bold' }, { text: "Zaoui", style: 'circle' },
            { text: "est" }, { text: "ce" }, { text: "qu'il" }, { text: "vous" }, { text: "faut", style: 'italic' },
            { text: "pour" }, { text: "une" }, { text: "communication", style: 'underline' }, { text: "impactante.", style: 'bold' }
        ]
    },
    {
        id: '2',
        category: "Sensibilisation",
        author: "Alex – Wikimédia",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/wikimedia.webp",
        fullText: "Une excellente introduction au concept de conflits d’intérêts pour tous les membres de l’association.",
        words: [
            { text: "Une" }, { text: "excellente", style: 'italic' }, { text: "introduction", style: 'bold' },
            { text: "au" }, { text: "concept" }, { text: "de" }, { text: "conflits d'intérêts", style: 'circle' },
            { text: "pour" }, { text: "tous" }, { text: "nos" }, { text: "membres.", style: 'underline' }
        ]
    },
    {
        id: '3',
        category: "Formation",
        author: "Mélanie – Achat Public",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/achat-public-logo.webp",
        fullText: "Je pense que votre formation devrait être obligatoire. Elle était riche, remplie d’exemples concrets et accessibles. J’ai par exemple compris en pratique ce qu’était la concussion et les leviers existants à mobiliser pour prévenir la corruption au quotidien. Je ne suis pas sortie de la formation en me disant “c’est dommage”. J’en garde un bon souvenir !",
        words: [
            { text: "La" }, { text: "formation", style: 'bold' }, { text: "devrait" }, { text: "être" }, { text: "obligatoire.", style: 'circle' },
            { text: "Elle" }, { text: "était" }, { text: "riche,", style: 'italic' }, { text: "remplie" }, { text: "d'exemples" },
            { text: "concrets", style: 'bold' }, { text: "et" }, { text: "accessibles.", style: 'underline' }
        ]
    },
    {
        id: '4',
        category: "Sensibilisation",
        author: "Anonyme – Bénévole Wikimédia",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/wikimedia.webp",
        fullText: "C’est un atelier instructif [Atelier de sensibilisation] qui sert dans de nombreuses situations et permet également d’approfondir la culture générale. Merci beaucoup.",
        words: []
    },
    {
        id: '5',
        category: "Sensibilisation",
        author: "Anonyme – Bénévole Wikimédia",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/wikimedia.webp",
        fullText: "Informatif, très utile, facile et agréable à suivre.",
        words: []
    },
    {
        id: '6',
        category: "Sensibilisation",
        author: "Ibrahima – Bénévole Wikimédia",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/wikimedia.webp",
        fullText: "C’était vraiment bien et je conseille tout le monde de le suivre [Atelier de sensibilisation].",
        words: []
    },
    {
        id: '7',
        category: "Formation",
        author: "Anonyme – GIE Chartres",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/chartres-ressources.webp",
        fullText: "Se former, s’informer pour mieux exercer ses missions au quotidien.",
        words: []
    },
    {
        id: '8',
        category: "Formation",
        author: "Anonyme – GIE Chartres",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/chartres-ressources.webp",
        fullText: "La formation sur la maîtrise des risques est indispensable car elle permet de se remettre en cause sur notre pratique afin de limiter les risques financiers et juridiques qui peuvent avoir des conséquences importantes sur les agents et les élus.",
        words: []
    },
    {
        id: '9',
        category: "Sensibilisation",
        author: "Anonyme – GIE Chartres",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/chartres-ressources.webp",
        fullText: "Je conseille cet atelier qui permettrait d’aider, de soulager et d’orienter, dans de bonnes conditions, les tâches quotidiennes des différents services de la collectivité.",
        words: []
    },
    {
        id: '10',
        category: "Formation",
        author: "Delphine R. – GIE Chartres",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/chartres-ressources.webp",
        fullText: "J’ai trouvé cette intervention très explicite et accessible à tous. Permet de démystifier les actions à mener.",
        words: []
    },
    {
        id: '11',
        category: "Coaching",
        author: "Erwan S. – Avocat",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/Probitas_Farah-Zaoui-640b-400x400-1.webp",
        fullText: "Avant de suivre ce coaching, je cherchais à comprendre le fonctionnement de LinkedIn (ce qui marche et ce qui ne marche pas) et comment structurer un post pour mettre en avant mon expertise et gagner en visibilité. J’ai particulièrement apprécié la première partie théorique, qui m’a permis de comprendre les bases, ainsi que la deuxième partie plus pratique. Les conseils de Farah Zaoui étaient à la fois pragmatiques et pertinents. Ce que j’ai vraiment aimé, c’est le partage sans retenu de son expérience et ses conseils pratiques qui m’ont permis de mieux structurer mes publications. Depuis le coaching, j’ai constaté une nette augmentation de l’engagement sur mes posts et j’ai enfin lancé une véritable stratégie de communication, ce qui était un vrai défi pour moi auparavant.",
        words: []
    },
    {
        id: '12',
        category: "Formation",
        author: "Christiane L. – SCET",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "",
        fullText: "La formation [Dispositif de sensibilisation aux règles de déontologie et de probité] a été largement réussie, tant sur le fond que sur la forme. La formatrice a été un atout majeur, et les participants ont souligné la qualité pédagogique ainsi que la pertinence des exemples. 91 % des participants estiment que la formation a répondu à leurs attentes. 94 % ont progressé et 93 % pensent pouvoir appliquer rapidement les connaissances acquises.",
        words: []
    },
    {
        id: '13',
        category: "Formation",
        author: "Malika S. – Ville d’Ermont",
        imageUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/ville-ermont.webp",
        fullText: "L’intervenante était très claire et précise juridiquement. Avis très positif sur les formations proposées !",
        words: []
    },
    {
        id: '14',
        category: "Formation",
        author: "Mélissa B. – Achat Public",
        imageUrl: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/achat-public-logo.webp",
        fullText: "La formation [Le risque pénal dans la commande publique] était préparée par la formatrice qui maîtrise son sujet. Le fil conducteur de chaque thématique est présent tout au long de la journée de formation. Les cas pratiques étaient un plus pour améliorer la compréhension de la thématique. Cette formation était importante pour moi, car elle met en avant les risques qui pèsent sur les agents et élus tout au long de la procédure marché public. Je vais pouvoir envisager une procédure interne renforcée de prévention sur ces risques.",
        words: []
    },
    {
        id: '15',
        category: "Coaching",
        author: "Pierre V. – Intelligence 360",
        imageUrl: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/Probitas_Farah-Zaoui-640b-400x400-1.webp",
        fullText: "Farah est particulièrement pédagogue et m’a montré toutes les subtilités de Linkedin. Elle a la bonne approche pour optimiser mon profil Linkedin et depuis ses conseils, j’utilise Linkedin quasi tous les jours. Depuis j’ai régulièrement des opportunités. Je recommande.",
        words: []
    },
    {
        id: '16',
        category: "Sensibilisation",
        author: "Nicolas J. – DRAJES",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/logo-drajes.webp",
        fullText: "Une très bonne intervention [atelier sur le sujet : cadeaux et invitations à l’approche des JO2024] avec plein d’exemples concrets que nous, agents de l’État pourrions rencontrer. Certaines situations présentées pouvaient sembler anodines, mais qui pourraient avoir des conséquences sérieuses sur notre intégrité professionnelle.",
        words: []
    },
    {
        id: '17',
        category: "Sensibilisation",
        author: "Yann C. – DRAJES",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/logo-drajes.webp",
        fullText: "Intervention de qualité sur cette sensibilisation [atelier sur le sujet : cadeaux et invitations à l’approche des JO2024]. Cela me permettra de mieux cerner une situation, d’être vigilant ou bien d’avoir un regard averti en lien avec ce sujet des cadeaux et invitations donnés et reçus dans le cadre professionnel.",
        words: []
    },
    {
        id: '18',
        category: "Sensibilisation",
        author: "Mélanie G. – WEKA",
        imageUrl: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/weka-logo.webp",
        fullText: "J’ai fait appel à Farah pour participer à une Masterclass sur la thématique des conflits d’intérêt et la compliance dans les marchés publics, et je n’ai pas été déçue ! Farah est très efficace et compétente sur ce sujet. Elle a une très bonne capacité d’adaptation, son enthousiasme l’a rendue opérationnelle et autonome sur cet événement. Elle est souriante et bienveillante, ça a été un plaisir de travailler avec Farah, c’est une personne dynamique, et je referai appel à elle sans hésitation si l’occasion se représente.",
        words: []
    },
    {
        id: '19',
        category: "Formation",
        author: "Djidi – Achat Public",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/achat-public-logo.webp",
        fullText: "J’ai pu en l’espace d’une journée cerner les grands enjeux éthiques de la commande publique. Cela m’a apporté une plus-value professionnelle très importante.",
        words: []
    },
    {
        id: '20',
        category: "Sensibilisation",
        author: "Chrystel L. – CDG 77",
        imageUrl: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/cdg77-logo.webp",
        fullText: "Tant les agents du Centre Départemental de Gestion de Seine-et-Marne que les élus du Département, ont pu bénéficier des éclairages de Farah, grande spécialiste de l’anticorruption, qui a pris le temps de parcourir les contours de la déontologie dans le secteur public. Un thème amené à devenir de plus en plus incontournable à mesure des années. Ses interventions didactiques, pédagogiques au sein du CDG 77 en juin dernier et lors du 61ᵉ Congrès des Maires le 29 septembre 2023, ont eu pour mérite d’éveiller la curiosité des agents publics et des décideurs territoriaux sur la manière dont les usagers perçoivent l’action publique et font ou non confiance à la puissance publique. Clarifier ce qu’est la déontologie en quelques mots, ses tenants et aboutissants, juridiques, moraux et sociétaux : ce fut la mission accomplie par Farah en quelques heures. Un grand remerciement pour ce très beau travail !",
        words: []
    },
    {
        id: '21',
        category: "Formation",
        author: "Moctar – SNIM",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/snim-logo.webp",
        fullText: "J’ai trouvé la formation bien préparée dans son fond avec des exemples concrets qui facilitent sa compréhension et que vous étiez disponible pour répondre à toutes les questions et que l’échange était aisé et interactif.",
        words: []
    },
    {
        id: '22',
        category: "Formation",
        author: "Ewe Nahah A. – SNIM",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
        logoUrl: "/assets/logo/snim-logo.webp",
        fullText: "Mme Farah ZAOUI nous a dispensé durant 3 jours en mai 2023, des cours très intéressants et bénéfiques sur les thèmes suivants : – Transparence et Communication des documents administratifs – Les Outils et Méthodes de la lutte anticorruption appliqués à l’Entreprise Je saisis cette occasion pour vous remercier pour la qualité et la clarté des cours dispensés.",
        words: []
    }
];
