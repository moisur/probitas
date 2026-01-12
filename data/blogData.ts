export interface BlogItemData {
    id: string;
    title: string;
    category: string;
    date: string;
    type: 'article' | 'video'; // Can be expanded
    link: string; // Internal or external link
    description: string;
    image: string;
    longDescription?: string;
    content?: string; // For full article content if needed internally
}

export const blogData: BlogItemData[] = [
    {
        id: "ethique-performance",
        title: "L'éthique comme levier de performance",
        category: "Réflexion",
        date: "05/01/2026",
        type: "article",
        link: "#",
        description: "Pourquoi l'investissement dans la conformité n'est pas un coût mais un atout stratégique.",
        longDescription: "Dans cet article, nous explorons comment une culture d'intégrité forte peut améliorer la réputation, attirer les talents et sécuriser les partenariats d'affaires à long terme.",
        content: `
            <p>Dans un monde économique en perpétuelle mutation, l'éthique ne peut plus être perçue comme une simple contrainte réglementaire ou un "nice to have". Elle s'impose aujourd'hui comme un <span class="text-[#BF9B8E]">véritable levier de performance durable</span> pour les entreprises.</p>
            
            <h3>Au-delà de la conformité : un avantage concurrentiel</h3>
            <p>Les entreprises qui intègrent l'éthique au cœur de leur stratégie ne se contentent pas d'éviter les sanctions. Elles construisent une <strong>marque employeur forte</strong>, capable d'attirer les meilleurs talents en quête de sens. De plus, elles rassurent les investisseurs et les partenaires commerciaux, de plus en plus attentifs aux critères <em>ESG (Environnementaux, Sociaux et de Gouvernance)</em>.</p>
            
            <h3>La confiance, monnaie du XXIe siècle</h3>
            <p>La confiance est devenue un <span class="text-[#BF9B8E]">actif incorporel majeur</span>. Une réputation d'intégrité permet de fidéliser les clients et de traverser plus sereinement les crises. À l'inverse, un <strong>scandale éthique</strong> peut détruire en quelques jours des années de construction d'image.</p>
            
            <h3>Concrètement, comment faire ?</h3>
            <p>Mettre en place une culture de l'intégrité passe par des actions concrètes : formation des équipes, mise en place de canaux de signalement sécurisés, et surtout, <em>l'exemplarité des dirigeants</em>. C'est un travail de fond qui demande courage et constance, mais dont le retour sur investissement est <span class="text-[#BF9B8E]">inestimable</span>.</p>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "loi-sapin-2",
        title: "Décryptage de la loi Sapin II",
        category: "Juridique",
        date: "12/12/2025",
        type: "article",
        link: "#",
        description: "Les points clés à retenir pour les PME et ETI en 2026.",
        longDescription: "Une analyse détaillée des dernières jurisprudences et des attentes de l'AFA concernant les dispositifs anticorruption dans les entreprises de taille intermédiaire.",
        content: `
            <p>Promulguée en 2016, la <span class="text-[#BF9B8E]">loi Sapin II</span> a marqué un tournant dans la lutte contre la corruption en France. Près de dix ans plus tard, ses exigences se sont précisées et étendues, touchant désormais un spectre plus large d'acteurs économiques, y compris les <em>PME et les ETI</em>.</p>

            <h3>Les piliers du dispositif</h3>
            <p>Pour rappel, l'article 17 de la loi impose huit mesures clés, dont la <strong>cartographie des risques</strong>, le code de conduite, et le dispositif d'alerte interne. En 2025-2026, l'<em>Agence Française Anticorruption (AFA)</em> met l'accent sur <span class="text-[#BF9B8E]">l'efficacité réelle</span> de ces mesures, et non plus seulement sur leur existence formelle.</p>

            <h3>Ce qui change pour les PME</h3>
            <p>Si les seuils d'assujettissement restent les mêmes, la pression du marché s'accentue. Les grands groupes exigent désormais de leurs fournisseurs des garanties de <strong>probité équivalentes aux leurs</strong>. La conformité devient ainsi une <em>condition d'accès au marché</em>.</p>

            <h3>La jurisprudence récente</h3>
            <p>Les récentes décisions de la Commission des sanctions de l'AFA montrent une <span class="text-[#BF9B8E]">sévérité accrue</span> envers les dirigeants qui négligent l'implication personnelle dans le déploiement du programme de conformité. Le message est clair : l'engagement doit venir d'en haut (<em>"Tone at the Top"</em>).</p>
        `,
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "interview-deontologue",
        title: "Interview : La place du déontologue",
        category: "Interview",
        date: "20/11/2025",
        type: "video",
        link: "#",
        description: "Rencontre avec un expert du secteur public.",
        longDescription: "Vidéo exclusive où nous discutons des défis quotidiens rencontrés par les déontologues dans les collectivités territoriales.",
        content: `
            <p>Dans cet entretien exclusif, nous recevons <span class="text-[#BF9B8E]">Marc Dupont</span>, déontologue expérimenté auprès de plusieurs grandes collectivités. Il revient sur l'évolution de son métier et les nouveaux enjeux posés par la <em>digitalisation des services publics</em>.</p>
            
            <h3>Les thèmes abordés :</h3>
            <ul>
                <li>La <strong>prévention des conflits d'intérêts</strong> à l'heure du pantouflage.</li>
                <li>La protection des <em>lanceurs d'alerte</em> dans la fonction publique.</li>
                <li>Comment sensibiliser les élus aux <span class="text-[#BF9B8E]">zones grises de la probité</span> ?</li>
            </ul>
            
            <p>Retrouvez l'intégralité de l'échange dans la <em>vidéo ci-dessus</em>.</p>
        `,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
    }
];
