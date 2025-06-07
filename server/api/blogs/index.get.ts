export default defineEventHandler(async (event) => {
  const response = [
    {
      id: 1,
      title: "Introduction à Laravel",
      slug: "introduction-a-laravel",
      excerpt: "Découvrez les bases de Laravel, le framework PHP moderne.",
      content: "Lorem ipsum dolor sit amet...",
      author: {
        id: 5,
        name: "Jean Dupont",
        avatar: "/avatars/jean.jpg",
      },
      tags: ["PHP", "Laravel", "Backend"],
      created_at: "2024-05-15T10:30:00Z",
      updated_at: "2024-05-15T10:30:00Z",
      image: "/images/laravel-article.jpg",
    },
    {
      id: 2,
      title: "Les bonnes pratiques REST",
      slug: "bonnes-pratiques-rest",
      excerpt: "Comment concevoir une API REST robuste.",
      content: "Lorem ipsum dolor sit amet...",
      author: {
        id: 8,
        name: "Marie Martin",
        avatar: "/avatars/marie.jpg",
      },
      tags: ["API", "REST", "HTTP"],
      created_at: "2024-05-10T14:15:00Z",
      updated_at: "2024-05-12T09:45:00Z",
      image: "/images/api-design.jpg",
    },
  ];

  return response;
});
