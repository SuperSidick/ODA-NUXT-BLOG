<template>
    <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div class="row">
            <div class="col-lg-2 px-2 pt-3">
                <img :src="`https://picsum.photos/id/${blog.id}/100/50`" class="img-fluid w-100 rounded">
            </div>
            <div class="col-lg-6 px-2 pt-3">
                <h1 class="display-4 fst-italic">{{ blog.title }}</h1>
                <p class="lead my-3">
                    {{ blog.excerpt }}
                </p>
            </div>
        </div>
    </div>

    <div class="row mx-5 g-5">
        <div class="col-md-8">
            <article class="blog-post">
                <p class="blog-post-meta">{{ blog.created_at }} Fait par <a href="#">{{ blog.author.name }}</a></p>
                <p>
                    {{ blog.content }}
                </p>
                <h3>Tags</h3>
                <p>
                    <a class="btn btn-primary mx-1 btn-sm" v-for="(tag, index) in blog.tags" role="button"
                        :key="index">{{ tag }}</a>
                </p>
            </article>


            <div class="container my-4">
                <h5 class="mb-4">Commentaires</h5>

                <!-- Exemple de commentaire -->
                <div class="card mb-3" v-for="comment in comments.comments" :key="comment.id">
                    <div class="card-body d-flex align-items-start">
                        <img :src="`https://picsum.photos/id/${comment.id}/50/50`" class="rounded-circle me-3"
                            alt="Avatar" width="50" height="50">
                        <div>
                            <h6 class="card-title mb-1">{{ comment.author }}</h6>
                            <p class="card-text mb-1">{{ comment.content }}</p>
                            <small class="text-muted me-2">Posté le {{ comment.created_at }}</small>
                            <button class="btn btn-sm btn-info">
                                ❤️ {{ comment.likes }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card my-4">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Laisser un commentaire</h5>

                        <form>
                            <div class="mb-3">
                                <label for="author" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="author" required>
                            </div>

                            <div class="mb-3">
                                <label for="content" class="form-label">Commentaire</label>
                                <textarea class="form-control" id="content" rows="3" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                </div>


            </div>


        </div>
        <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">

                <div>
                    <h4 class="fst-italic">Autres Blogs</h4>
                    <ul class="list-unstyled">
                        <li v-for="(blogi, i) in anotherBlogs" :key="i">
                            <a
                                class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-1 link-body-emphasis text-decoration-none border-top">
                                <NuxtLink :to="{ name: 'blogs-id', params: { id: blogi.id } }">
                                    <img :src="`https://picsum.photos/id/${blogi.id}/100/50`"
                                        class="img-fluid w-100 rounded">
                                </NuxtLink>

                                <div class="col-lg-8">
                                    <NuxtLink :to="{ name: 'blogs-id', params: { id: blogi.id } }">
                                        {{ blogi.title }}
                                    </NuxtLink>
                                    <br>
                                    <small class="text-body-secondary">{{
                                        blogi.author.name }}</small>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const blogs = ref([])
const comments = ref([])
const anotherBlogs = ref([])
const route = useRoute()


// Récupérer les blogs
const { data: blog } = await useFetch(`/api/blogs/${route.params.id}`)

// Récupérer les blogs
const { data: blogsData } = await useAsyncData('blogs', () => $fetch('/api/blogs'))

blogs.value = blogsData.value


comments.value = await $fetch("/api/comments")
comments.value = comments.value.find(t => t.article_id != blog.id)

anotherBlogs.value = blogs.value.filter(t => t.id != route.params.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
</script>
