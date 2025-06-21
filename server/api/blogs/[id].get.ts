export default defineEventHandler(async (event) => {
  
  //ici on va prendre l'id dans la paramètre 
  const id = parseInt(event.context.params?.id as string)

  //On va récupérer les blogs c'est plus simple
  const blogs = await $fetch("/api/blogs");


  //Ici on va faire un filtre pour récupérer le blog recherché
  const response = blogs.find(b => b.id === id);

  return response;
});
