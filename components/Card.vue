<template>
    <div class="card my-2 mx-3 " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-primary">
                <NuxtLink :to="{ name: 'blogs-id', params: { id: blog.id } }">{{ blog.title }}</NuxtLink>
            </h5>
            <h6 class="card-subtitle mb-2 text-danger opacity-75">{{ blog.slug }}</h6>
            <p class="card-text text-body-secondary">
                {{ blog.excerpt }}
            </p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({

    blog: {
        type: Object,
        required: true,
    },
})

</script>