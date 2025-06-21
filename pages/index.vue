<template>
  <div>

    <div class="container m-3">
      <div class="card-list d-flex flex-wrap justify-content-center mt-5 pt-3 px-2">
        <Card v-for="(blog, index) in blogs" :key="index" :blog="blog" />
      </div>
      <!-- START CARD -->
    </div>

  </div>
</template>

<script setup>

const blogs = ref([])
blogs.value = await $fetch("/api/blogs")

</script>