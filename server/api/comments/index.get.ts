export default defineEventHandler(async (event) => {
  const response = [
    {
      article_id: 1,
      comments: [
        {
          id: 101,
          author: "DevPHP42",
          avatar: "/avatars/guest1.jpg",
          content:
            "Super introduction ! Juste une petite coquille dans l'exemple sur les migrations, sinon parfait pour débuter avec Laravel.",
          created_at: "2024-05-15T14:22:00Z",
          likes: 5,
        },
        {
          id: 102,
          author: "AliceCode",
          avatar: "/avatars/guest2.jpg",
          content:
            "Vous pourriez faire un follow-up sur les relations Eloquent ? Ce serait super utile !",
          created_at: "2024-05-16T09:10:00Z",
          likes: 3,
        },
      ],
    },
    {
      article_id: 2,
      comments: [
        {
          id: 201,
          author: "APILover",
          avatar: "/avatars/guest3.jpg",
          content:
            "Très complet comme article. Petite suggestion : parler aussi de GraphQL pour le prochain ?",
          created_at: "2024-05-11T08:45:00Z",
          likes: 7,
        },
        {
          id: 202,
          author: "SeniorDev",
          avatar: "/avatars/guest4.jpg",
          content:
            "Attention à la section sur la pagination, l'implémentation peut varier selon les langages. À préciser peut-être ?",
          created_at: "2024-05-12T16:30:00Z",
          likes: 2,
        },
      ],
    },
    {
      article_id: 3,
      comments: [
        {
          id: 301,
          author: "ReactFan",
          avatar: "/avatars/guest5.jpg",
          content:
            "Comparaison très objective, contrairement à ce qu'on voit souvent. Merci !",
          created_at: "2024-05-21T10:15:00Z",
          likes: 12,
        },
        {
          id: 302,
          author: "VueEnthousiaste",
          avatar: "/avatars/guest6.jpg",
          content:
            "Vous sous-estimez peut-être l'écosystème Vue qui a beaucoup grossi en 2024, non ?",
          created_at: "2024-05-22T18:40:00Z",
          likes: 4,
          replies: [
            {
              id: 3021,
              author: "Thomas Leroy",
              avatar: "/avatars/thomas.jpg",
              content:
                "Bonne remarque ! J'actualiserai cet aspect dans une prochaine version de l'article.",
              created_at: "2024-05-23T09:20:00Z",
            },
          ],
        },
      ],
    },
    {
      article_id: 4,
      comments: [
        {
          id: 401,
          author: "DBAExpert",
          avatar: "/avatars/guest7.jpg",
          content:
            "Enfin un article qui parle des vrais problèmes ! La section sur les index couvre bien les bases.",
          created_at: "2024-05-19T11:05:00Z",
          likes: 9,
        },
        {
          id: 402,
          author: "JuniorDev",
          avatar: "/avatars/guest8.jpg",
          content:
            "Je ne comprends pas bien la partie sur les plans d'exécution. Possible d'avoir plus d'exemples ?",
          created_at: "2024-05-20T15:33:00Z",
          likes: 1,
        },
      ],
    },
    {
      article_id: 5,
      comments: [
        {
          id: 501,
          author: "DevOpsNewbie",
          avatar: "/avatars/guest9.jpg",
          content:
            "Cet article m'a sauvé la vie pour mon projet de fin d'études ! Merci infiniment.",
          created_at: "2024-05-23T19:12:00Z",
          likes: 15,
        },
        {
          id: 502,
          author: "ContainerGuru",
          avatar: "/avatars/guest10.jpg",
          content:
            "Pour les curieux, regardez aussi Podman comme alternative à Docker. Les concepts sont similaires.",
          created_at: "2024-05-24T08:50:00Z",
          likes: 6,
        },
      ],
    },
    {
      article_id: 6,
      comments: [
        {
          id: 601,
          author: "SecurityResearcher",
          avatar: "/avatars/guest11.jpg",
          content:
            "Article solide. J'ajouterais juste un paragraphe sur les attaques DDOS qui sont souvent négligées.",
          created_at: "2024-05-26T13:27:00Z",
          likes: 8,
        },
        {
          id: 602,
          author: "WebMaster",
          avatar: "/avatars/guest12.jpg",
          content:
            "Les headers CSP manquent à l'appel, c'est pourtant crucial aujourd'hui !",
          created_at: "2024-05-28T10:15:00Z",

          likes: 3,
          replies: [
            {
              id: 6021,
              author: "Marie Martin",
              avatar: "/avatars/marie.jpg",
              content:
                "Excellente suggestion ! Je prépare un article dédié à la sécurité côté client qui couvrira cela.",
              created_at: "2024-05-29T14:10:00Z",
            },
          ],
        },
      ],
    },
    {
      article_id: 7,
      comments: [
        {
          id: 701,
          author: "VueMaster",
          avatar: "/avatars/guest13.jpg",
          content:
            "Pinia est maintenant recommandé plutôt que Vuex pour les nouveaux projets, à mentionner peut-être ?",
          created_at: "2024-05-29T12:45:00Z",
          likes: 11,
        },
        {
          id: 702,
          author: "StateManagementFan",
          avatar: "/avatars/guest14.jpg",
          content:
            "Très bon tutoriel pas à pas. Les diagrammes aident vraiment à comprendre le flux de données.",
          created_at: "2024-05-30T16:20:00Z",
          likes: 4,
        },
      ],
    },
    {
      article_id: 8,
      comments: [
        {
          id: 801,
          author: "JSNinja",
          avatar: "/avatars/guest15.jpg",
          content:
            "Le pattern matching va enfin nous sauver de tonnes de switch/case ! Vivement la sortie officielle.",
          created_at: "2024-06-02T07:30:00Z",
          likes: 20,
        },
        {
          id: 802,
          author: "TypeScriptFan",
          avatar: "/avatars/guest16.jpg",
          content:
            "Ces nouveautés seront-elles compatibles avec TypeScript dès leur sortie ?",
          created_at: "2024-06-03T11:55:00Z",
          likes: 5,
          replies: [
            {
              id: 8021,
              author: "Sophie Lambert",
              avatar: "/avatars/sophie.jpg",
              content:
                "Oui, l'équipe TypeScript travaille en étroite collaboration avec TC39 pour une adoption rapide !",
              created_at: "2024-06-04T09:15:00Z",
            },
          ],
        },
      ],
    },
  ];

  return response;
});
