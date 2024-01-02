import desktop from '../assets/desktop.png'
import telephone from '../assets/telephone.png'
import booki from '../assets/booki.png'
import ohmyfood from '../assets/ohmyfood.png'
import kanap from '../assets/kanap.png'
import piiquante from '../assets/piiquante.png'
import groupomania from '../assets/groupomania.png'
import portfolio from '../assets/portfolio-1.png'
import memory from '../assets/memory.png'
import minesweeper from '../assets/minesweeper.png'
import quizz from '../assets/quizz.png'
import { ReactComponent as Redux} from '../assets/redux.svg'
import {ReactComponent as Html5 } from '../assets/html5.svg'
import {ReactComponent as Css } from '../assets/css.svg'
import {ReactComponent as Sass } from '../assets/sass.svg'
import {ReactComponent as Js } from '../assets/javascript.svg'
import {ReactComponent as NodeJs } from '../assets/nodejs.svg'
import {ReactComponent as Database } from '../assets/database.svg'
import {ReactComponent as VueJs } from '../assets/vuejs.svg'
import {ReactComponent as React } from '../assets/react.svg'
import {ReactComponent as PHP} from '../assets/php.svg'
import {ReactComponent as MySQL} from '../assets/mysql.svg'

export const skillsTable = [
    {
        id: 'sk1',
        category: 'frontend',
        skill: 'HTML',
    },
    {
        id: 'sk2',
        category: 'frontend',
        skill: 'CSS / SCSS',
    },
    {
        id: 'sk3',
        category: 'frontend',
        skill: 'JavaScript',
    },
    {
        id: 'sk4',
        category: 'frontend',
        skill: 'VueJS',
    },
    {
        id: 'sk5',
        category: 'frontend',
        skill: 'React',
    },
    {
        id: 'sk6',
        category: 'backend',
        skill: 'NodeJS',
    },
    {
        id: 'sk7',
        category: 'autre',
        skill: 'GitHub',
    },
    {
        id: 'sk8',
        category: 'autre',
        skill: 'MongoDB',
    },
    {
        id: 'sk9',
        category: 'autre',
        skill: 'Redux Toolkit',
    },
    {
        id: 'sk10',
        category: 'backend',
        skill: 'PHP',
    },
    {
        id: 'sk11',
        category: 'backend',
        skill: 'MySQL',
    },
]

export const experiencesTable = [
    {
        id: 'exp14',
        job: 'En recherche d\'alternance',
        company: '',
        contract: '2 ans',
        date: 'Disponible immédiatemment',
        category: 'dev'
    },
    {
        id: 'exp13',
        job: 'Technicienne Qualité/HSE',
        company: 'Phytéo Laboratoire',
        contract: 'CDI',
        date: 'Juillet 2020 - Mars 2021',
        category: 'lab'
    },
    {
        id: 'exp12',
        job: 'Assistante QHSE',
        company: 'Phytéo Laboratoire',
        contract: 'Intérimaire',
        date: 'Janvier - Juin 2020',
        category: 'lab'
    },
    {
        id: 'exp11',
        job: 'Assistante Responsable Laboratoire de Contrôle Qualité',
        company: 'Phytéo Laboratoire',
        contract: 'Intérimaire',
        date: 'Décembre 2019',
        category: 'lab'
    },
    {
        id: 'exp10',
        job: 'Assistante QHSE',
        company: 'Phytéo Laboratoire',
        contract: 'CDD',
        date: 'Février - Août 2019',
        category: 'lab'
    },
    {
        id: 'exp9',
        job: 'Assistante QHSE',
        company: 'Phytéo Laboratoire',
        contract: 'Intérimaire',
        date: 'Janvier 2019',
        category: 'lab'
    },
    {
        id: 'exp8',
        job: 'Assistante Qualité',
        company: 'Phytéo Laboratoire',
        contract: 'Intérimaire',
        date: 'Mai - Septembre 2018',
        category: 'lab'
    },
    {
        id: 'exp7',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'CDD',
        date: 'Novembre 2017 - Février 2018',
        category: 'lab'
    },
    {
        id: 'exp6',
        job: 'Technicienne Laboratoire',
        company: 'Alpa',
        contract: 'CDD',
        date: 'Juillet 2017 - Novembre 2017',
        category: 'lab'
    },
    {
        id: 'exp5',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'Intérimaire',
        date: 'Tous les samedis de Septembre 2016 à Juillet 2017',
        category: 'lab'
    },
    {
        id: 'exp4',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'Intérimaire',
        date: 'Décembre 2016',
        category: 'lab'
    },
    {
        id: 'exp3',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'Intérimaire',
        date: 'Octobre 2016',
        category: 'lab'
    },
    {
        id: 'exp2',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'Intérimaire',
        date: 'Juillet - Août 2016',
        category: 'lab'
    },
    {
        id: 'exp1',
        job: 'Technicienne Laboratoire',
        company: 'Alpabio',
        contract: 'Stage',
        date: 'Tous les samedis de Mars à Août 2016',
        category: 'lab'
    },  
]

export const projectsTable = [
    {
        id: 'pr1',
        name: 'Booki',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'CSS',
                logo: <Css />,
            }
        ],
        skills: ['Intégrer une maquette', 'Implémenter une interface responsive'],
        openclassroom: true,
        context: `Premier stage chez l'entreprise Booki. Un nouveau design vient d'être réalisé par le designer UI de l'entreprise.
        Avant de valider le nouveau design, Booki souhaite réaliser un prototype à l'aide de la maquette.`,
        specifications: ['Le site doit suivre les maquettes desktop et mobile, mais doit aussi être adapté aux formats tablette.',
        'Il est interdit d\'utiliser Grid, un framework CSS (type BootStrap ou Tailwind CSS), un processeur CSS (type Sass ou Less).',
        'Le code doit être conforme aux validateurs W3C HTML et CSS.'],
        images: [
            {
                image: desktop, 
                caption: 'Maquette Desktop'
            },
            {
                image: telephone,
                caption:'Maquette téléphone'
            }
        ],
        cover: booki,
        code: 'https://github.com/Saika667/P2-Booki',
        site: 'https://saika667.github.io/P2-Booki/'
    },
    {
        id: 'pr2',
        name: 'Oh my food',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            }
        ],
        skills: ['Mettre en oeuvre des effets CSS graphiques avancés', 
        'Mettre en place un environnement Front-End',
        'Mettre en place une structure de navigation pour un site web',
        'Utiliser un système de gestion de versions pour le suivi du projet et son hébergement'],
        openclassroom: true,
        context: `Recrutée chez Ohmyfood, en tant que développeuse junior. L'entreprise Ohmyfood est une startup qui souhaite s'imposer 
        sur le marché de la restauration. L'objectif est de développer un site 100% mobile.`,
        specifications: ['Il est interdit d\'utiliser du JavaScript, un framework.', 
        'Le code doit être conforme aux validateurs W3C HTML et CSS.',
        'Les animations d\'apparition de menu, lorsque l\'utilisateur se rend sur une page menu, et de coche, lorsque l\'utilisateur souhaite ajouter un plat, doivent correspondre à la maquette.',
        'Un "loading spinner" est nécessaire, le design n\'est pas défini. Le "loading spinner" doit apparaitre 1 à 3 secondes, recouvrir l\'intégralité de l\'écran et doit respecter l\'identité graphique du site.'],
        images: [],
        cover: ohmyfood,
        code: 'https://github.com/Saika667/P3_oh_my_food',
        site: 'https://saika667.github.io/P3_oh_my_food/'
    },
    {
        id: 'pr3',
        name: 'Kanap',
        technologies: [
            {
                name: 'JavaScript',
                logo: <Js />,
            },
        ],
        skills: ['Valider des données issues de sources externes', 
        'Interagir avec un web service avec JavaScript',
        'Gérer des événements JavaScript'],
        openclassroom: true,
        context: `L'entreprise Kanap souhaite avoir une plateforme de e-commerce. La partie HTML / CSS a déjà été réalisée, je suis chargée de l'implémentation dynamique.`,
        specifications: ['Il est interdit d\'utiliser un framework ou librairie JavaScript.',
        'La page d\'accueil présente l\'ensemble des produits retournés par l\'API.',
        'La page produit présente un seul produit, l\'utilisateur peut choisir une option de personnalisation et saisir une quantité dans l\'input. Ces éléments doivent être pris en compte dans le panier',
        'La page panier affiche le panier et affiche le total à payer, la quantité des produits peut être modifiée. Le produit peut aussi être supprimé. Les inputs du formulaire doivent être vérifiés avant l\'envoi des données à l\'API.',
        'Le prix des articles ne doit pas être stocké dans le local storage.',
        'La page de confirmation doit afficher le numéro de commande, ce numéro ne doit être stocké nulle part.'],
        images: [],
        cover: kanap,
        code: 'https://github.com/Saika667/P5_Kanap',
        site: 'https://saika667.github.io/kanap-frontend/html/index.html'
    },
    {
        id: 'pr4',
        name: 'Piiquante',
        technologies: [
            {
                name: 'NodeJS',
                logo: <NodeJs />,
            },
            {
                name: 'MongoDB',
                logo: <Database />,
            }
        ],
        skills: ['Mettre en oeuvre des opérations CRUD de manière sécurisée.',
        'Implémenter un modèle logique de données conformément à la réglementation.',
        'Stocker des donnnées de manière sécurisée'],
        openclassroom: true,
        context: `La marque de condiments à base de piment Piiquante, souhaite développer une application web de critique des sauces piquantes appelée "Hot Takes".Le front-end de l'application a déjà été développé à l'aide d'Angular, 
        Piiquante a besoin d'un développeur back-end pour construire l'API.`,
        specifications: ['Le mot de passe de l\'utilisateur doit être haché.',
        'L\'authentification doit être renforcée sur toutes les routes sauce requises.',
        'Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.'],
        images: [],
        cover: piiquante,
        code: 'https://github.com/Saika667/P6_Piiquante',
        site: 'https://saika667.github.io/piiquante-frontend'
    },
    {
        id: 'pr5',
        name: 'Groupomania',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            },
            {
                name: 'NodeJS',
                logo: <NodeJs />,
            },
            {
                name: 'VueJS',
                logo: <VueJs />,
            },
            {
                name: 'MongoDB',
                logo: <Database />,
            }
        ],
        skills: ['Authentifier un utilisateur et maintenir sa session.', 
        'Implémenter un stockage de données sécurisé en utilisant une base de données.',
        'Développer l\'interface d\'un site web grâce à un framework front-end.'],
        openclassroom: true,
        context: `L'entreprise Groupomania souhaite créer un réseau social d'entreprise afin d'améliorer la communication entre les employés. Je suis chargée de la mise en place du back-end, front-end et de la base de données.`,
        specifications: ['Il est obligatoire d\'utiliser un framework JavaScript.',
        'Un utilisateur se connecte à partir d\'un mail et d\'un mot de passe. La session de l\'utilisateur persiste pendant qu\'il est connecté et les données de connexion doivent être sécurisées. Il doit être possible de se déconnecter.',
        'La page d\'accueil doit lister les posts créés de façon antéchronologique',
        'Un utilisateur doit pouvoir créer un post, s\'il est le propriétaire du post il peut le modifier ou le supprimer. Un post peut contenir du texte ou une image, ou les deux.',
        'Un utilisateur doit pouvoir liker un post, une seule fois.',
        'Un compte administrateur doit être créé. Dans le but de pouvoir modérer, ce compte aure les droits de modification / suppression sur tous les posts et comptes du réseau social.'],
        images: [],
        cover: groupomania,
        code: 'https://github.com/Saika667/groupomania',
        site: 'https://groupomania-frontend.vercel.app/'
    },
    {
        id: 'pr6',
        name: 'Portfolio',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            },
            {
                name: 'React',
                logo: <React />,
            }
        ],
        skills: ['Appréhender le Framework React'],
        openclassroom: false,
        context: 'Ce portfolio a été créé afin de présenter mes projets réalisés, dans le cadre de la formation Développeur Web chez Openclassrooms, ainsi que mes projets personnels. Les projets personnels ont été réalisés avec pour objectif d\'apprendre de nouvelles technologies.',
        specifications: ['Aucune'],
        images: [],
        cover: portfolio,
        code: 'https://github.com/Saika667/portfolio',
        site: ''
    },
    {
        id: 'pr7',
        name: 'Memory',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            },
            {
                name: 'React',
                logo: <React />,
            }
        ],
        skills: ['Travailler la logique de React.', 'Se familiariser avec les Hooks.', 'Réaliser des dessins simples en SCSS.'],
        openclassroom: false,
        context: 'Ce projet a été réalisé dans le but de mettre en avant mes compétences et de trouver un premier emploi dans le monde du développement.',
        specifications: ['Aucune'],
        images: [],
        cover: memory,
        code: 'https://github.com/Saika667/memory',
        site: 'https://saika667.github.io/Memory'
    },
    {
        id: 'pr8',
        name: 'Démineur',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            },
            {
                name: 'React',
                logo: <React />,
            },
            {
                name: 'Redux Toolkit',
                logo: <Redux />,
            }
        ],
        skills: ['Travailler la logique de React.', 'Apprendre à utiliser et mettre en place l\'outil Redux Toolkit.'],
        openclassroom: false,
        context: 'Ce projet a été réalisé dans le but de mettre en avant mes compétences et de trouver une alternance dans le monde du développement.',
        specifications: ['Aucune'],
        images: [],
        cover: minesweeper,
        code: 'https://github.com/Saika667/minesweeper',
        site: 'https://saika667.github.io/minesweeper'
    },
    {
        id: 'pr9',
        name: 'Quizz',
        technologies: [
            {
                name: 'HTML',
                logo: <Html5 />,
            },
            {
                name: 'SCSS',
                logo: <Sass />,
            },
            {
                name: 'PHP',
                logo: <PHP />,
            },
            {
                name: 'MySQL',
                logo: <MySQL />,
            }
        ],
        skills: ['Apprendre le PHP.', 'Apprendre le MySQL.', 'Apprendre à manipuler une base de donné SQL.', 'Développé en "Mobile first".', 'Travailler la programmation orientée objet.'],
        openclassroom: false,
        context: 'Ce projet a été réalisé dans le but de mettre en avant mes compétences et de trouver une alternance dans le monde du développement.',
        specifications: ['Aucune'],
        images: [],
        cover: quizz,
        code: 'https://github.com/Saika667/Quizz',
        site: 'https://saika-quiz.000webhostapp.com/quizz'
    },
]