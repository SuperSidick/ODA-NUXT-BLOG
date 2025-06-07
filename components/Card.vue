<template>
    <div class="card mt-5 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-primary">{{ props.title }}</h5>
            <h6 class="card-subtitle mb-2 text-danger opacity-75">{{ props.subtitle }}</h6>
            <p class="card-text text-body-secondary">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    subtitle: {
        type: String,
        required: false,
        default: "Subtitle"
    },
    description: String,
})

</script>