import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
    {
        id: '1',
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        words: [
            { text: "Le" },
            { text: "coaching" },
            { text: "de" },
            { text: "Farah", style: 'bold' },
            { text: "Zaoui", style: 'circle' },
            { text: "est" },
            { text: "ce" },
            { text: "qu'il" },
            { text: "vous" },
            { text: "faut", style: 'italic' },
            { text: "pour" },
            { text: "une" },
            { text: "communication", style: 'underline' },
            { text: "impactante.", style: 'bold' }
        ],
        author: "Ingrid K. – Coaching"
    },
    {
        id: '2',
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
        words: [
            { text: "Une" },
            { text: "excellente", style: 'italic' },
            { text: "introduction", style: 'bold' },
            { text: "au" },
            { text: "concept" },
            { text: "de", style: 'none' },
            { text: "conflits d'intérêts", style: 'circle' },
            { text: "pour" },
            { text: "tous" },
            { text: "nos" },
            { text: "membres.", style: 'underline' }
        ],
        author: "Alex – Wikimédia"
    },
    {
        id: '3',
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        words: [
            { text: "La" },
            { text: "formation", style: 'bold' },
            { text: "devrait" },
            { text: "être" },
            { text: "obligatoire.", style: 'circle' },
            { text: "Elle" },
            { text: "était" },
            { text: "riche,", style: 'italic' },
            { text: "remplie" },
            { text: "d'exemples" },
            { text: "concrets", style: 'bold' },
            { text: "et" },
            { text: "accessibles.", style: 'underline' }
        ],
        author: "Mélanie – Achat Public"
    }
];
