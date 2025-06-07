export default defineEventHandler(async (event) => {
  const response = [
  {
    "id": 1,
    "title": "Introduction à Laravel",
    "slug": "introduction-a-laravel",
    "excerpt": "Découvrez les bases de Laravel, le framework PHP moderne.",
    "content": "Laravel est un framework PHP élégant et expressif. Dans cet article, nous explorerons ses fonctionnalités clés comme le système de routage, Eloquent ORM, et le moteur de templates Blade. Laravel facilite le développement web avec une syntaxe expressive et des outils puissants.",
    "author": {
      "id": 5,
      "name": "Jean Dupont",
      "avatar": "/avatars/jean.jpg"
    },
    "tags": ["PHP", "Laravel", "Backend"],
    "created_at": "2024-05-15T10:30:00Z",
    "updated_at": "2024-05-15T10:30:00Z",
    "image": "/images/laravel-article.jpg"
  },
  {
    "id": 2,
    "title": "Les bonnes pratiques REST",
    "slug": "bonnes-pratiques-rest",
    "excerpt": "Comment concevoir une API REST robuste.",
    "content": "Une API REST bien conçue suit des principes clés : utilisation appropriée des verbes HTTP, codes de statut significatifs, versioning, pagination et documentation claire. Cet article détaille chaque aspect avec des exemples concrets pour créer des APIs maintenables et évolutives.",
    "author": {
      "id": 8,
      "name": "Marie Martin",
      "avatar": "/avatars/marie.jpg"
    },
    "tags": ["API", "REST", "HTTP"],
    "created_at": "2024-05-10T14:15:00Z",
    "updated_at": "2024-05-12T09:45:00Z",
    "image": "/images/api-design.jpg"
  },
  {
    "id": 3,
    "title": "React vs Vue.js en 2024",
    "slug": "react-vs-vue-2024",
    "excerpt": "Comparaison des deux frameworks JavaScript populaires.",
    "content": "React et Vue.js continuent de dominer le paysage frontend. React offre une grande flexibilité et un écosystème immense, tandis que Vue.js brille par sa simplicité et sa courbe d'apprentissage douce. Nous analysons les performances, l'écosystème et les cas d'usage idéaux pour chaque framework.",
    "author": {
      "id": 12,
      "name": "Thomas Leroy",
      "avatar": "/avatars/thomas.jpg"
    },
    "tags": ["JavaScript", "Frontend", "React", "Vue"],
    "created_at": "2024-05-20T08:45:00Z",
    "updated_at": "2024-05-22T11:20:00Z",
    "image": "/images/react-vue.jpg"
  },
  {
    "id": 4,
    "title": "Optimisation des performances SQL",
    "slug": "optimisation-sql",
    "excerpt": "Techniques avancées pour améliorer vos requêtes SQL.",
    "content": "Les bases de données sont souvent le goulot d'étranglement des applications. Cet article couvre l'indexation stratégique, l'analyse des plans d'exécution, les requêtes paramétrées, la normalisation/denormalisation et les outils de monitoring. Des conseils applicables à MySQL, PostgreSQL et SQL Server.",
    "author": {
      "id": 5,
      "name": "Jean Dupont",
      "avatar": "/avatars/jean.jpg"
    },
    "tags": ["SQL", "Database", "Performance"],
    "created_at": "2024-05-18T16:10:00Z",
    "updated_at": "2024-05-19T09:30:00Z",
    "image": "/images/sql-optimization.jpg"
  },
  {
    "id": 5,
    "title": "Introduction à Docker pour les développeurs",
    "slug": "introduction-docker",
    "excerpt": "Débuter avec les conteneurs et Docker.",
    "content": "Docker révolutionne le déploiement d'applications grâce aux conteneurs. Nous expliquons les concepts de base (images, conteneurs, Dockerfile), montrons comment conteneuriser une application simple, et abordons docker-compose pour gérer des environnements multi-conteneurs. Un must pour le développement moderne.",
    "author": {
      "id": 15,
      "name": "Sophie Lambert",
      "avatar": "/avatars/sophie.jpg"
    },
    "tags": ["DevOps", "Docker", "Conteneurisation"],
    "created_at": "2024-05-22T13:25:00Z",
    "updated_at": "2024-05-22T13:25:00Z",
    "image": "/images/docker-article.jpg"
  },
  {
    "id": 6,
    "title": "Sécurité des applications web",
    "slug": "securite-web",
    "excerpt": "Protégez votre application contre les attaques courantes.",

    "content": "XSS, CSRF, injections SQL, authentification faible... Les menaces sont nombreuses. Ce guide pratique explique chaque vulnérabilité avec des exemples concrets et montre comment les prévenir. Nous couvrons aussi les headers HTTP de sécurité et les bonnes pratiques de gestion des sessions.",
    "author": {
      "id": 8,
      "name": "Marie Martin",
      "avatar": "/avatars/marie.jpg"
    },
    "tags": ["Sécurité", "Web", "OWASP"],
    "created_at": "2024-05-25T09:15:00Z",
    "updated_at": "2024-05-27T14:50:00Z",
    "image": "/images/web-security.jpg"
  },
  {
    "id": 7,
    "title": "State Management avec Vuex",
    "slug": "vuex-state-management",
    "excerpt": "Gérer l'état global dans les applications Vue.js.",
    "content": "Vuex est la solution officielle pour le state management dans Vue.js. Nous explorons les concepts de state, mutations, actions et getters. L'article inclut un exemple complet d'application avec gestion d'état centralisée et montre comment structurer une grande application Vue pour une maintenabilité optimale.",
    "author": {
      "id": 12,
      "name": "Thomas Leroy",
      "avatar": "/avatars/thomas.jpg"
    },
    "tags": ["Vue", "JavaScript", "Frontend"],
    "created_at": "2024-05-28T11:30:00Z",
    "updated_at": "2024-05-29T10:15:00Z",
    "image": "/images/vuex-article.jpg"
  },
  {
    "id": 8,
    "title": "Les nouveautés d'ES2024",
    "slug": "es2024-nouveautes",
    "excerpt": "Tour d'horizon des nouvelles fonctionnalités JavaScript.",
    "content": "ECMAScript 2024 apporte des fonctionnalités intéressantes comme les Records et Tuples, le pattern matching, et des améliorations aux promesses. Cet article détaille chaque nouveauté avec des exemples de code et des cas d'usage concrets pour vous aider à adopter ces features rapidement.",
    "author": {
      "id": 15,
      "name": "Sophie Lambert",
      "avatar": "/avatars/sophie.jpg"
    },
    "tags": ["JavaScript", "ECMAScript", "Frontend"],
    "created_at": "2024-06-01T08:00:00Z",
    "updated_at": "2024-06-01T08:00:00Z",
    "image": "/images/es2024.jpg"
  }
]
;
  return response;
});
