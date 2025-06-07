<template>
    <div class="card mt-5 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-primary">{{ blog.title }}</h5>
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