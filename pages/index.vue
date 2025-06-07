<template>
  <div>
    <!-- START NAV BAR -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mon Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- START NAV BAR -->
    <div class="container">
      <!-- START CAROUSEL -->
      <!-- <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
      <!-- END CAROUSEL -->
      <!-- START CARD -->

      <div class="card-list d-flex flex-wrap justify-content-start">
        <Card :title="'Edupath'" :description="description"/>
        <Card :title="titlea" :subtitle="subtitlea" :description="descriptiona"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
        <Card :title="title" :subtitle="subtitle" :description="description"/>
      </div>
      <!-- START CARD -->
    </div>

  </div>
</template>

<script setup>

import Card from '~/components/Card.vue';

const title = ref("Edupath")
const subtitle = ref("Nuxt Js Online Courses & Education LMS Template")
const description = ref("Edupath is a Vue Nuxt Js Online Courses & Education LMS Template designed specifically for educational...")


const titlea = ref("Bonx v1.0 ")
const subtitlea = ref("Vue Js Gaming Website Template with Nuxt Js")
const descriptiona = ref("Bonx – Vue Js Gaming Website Template with Nuxt Js is a comprehensive gaming website design solution. This...")
</script>