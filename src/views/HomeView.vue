<script setup>
  import { RouterLink } from 'vue-router';
  
  
</script>

<style scoped src="../assets/HomeView.css"></style>

<template>
  <main>
    <div class="fond-presentation">
      <p class="eyebrow">DÉVELOPPEMENT WEB · BTS SIO SLAM</p>
      <section class="presentation">
        <h1>Jani.</h1>
        <p class="phrase-principale">Construire, résoudre, comprendre. </p>
        <p class="phrase-secondaire">Mon parcours en tant que développeur web !</p>
        <div class="to-projects">
          <RouterLink to="/Projets">Découvrir les projets ↗</RouterLink>
        </div>
        <a class="defiler" href="#projets">Défiler <span>↓</span></a>
      </section>
    </div>   
    <section id="projets">
      <div class="prez-projet">
        <span class="numero-projet">01</span>
        <p class="descr-projet">Premier projet · Projet de stage</p>
        <h2 class="titre-projet">Adapter un site à tous les écrans.</h2>
        <p class="detail-projet">Blogger · Responsive</p>
        <div class="to-projects">
          <RouterLink to="/Projets/blogger-responsive">Découvrir le projet ↗</RouterLink>
        </div>
      </div>
      <div class="prez-projet">
        <span class="numero-projet">02</span>
        <p class="descr-projet">Deuxième projet · Projet personnel</p>
        <h2 class="titre-projet">Portfolio.</h2>
        <p class="detail-projet">Front-end</p>
        <div class="to-projects">
          <RouterLink to="/Projets/portfolio">Découvrir le projet ↗</RouterLink>
        </div>
      </div>
      <div class="prez-projet">
        <span class="numero-projet">03</span>
        <p class="descr-projet">Troisième projet · Projet d'école</p>
        <h2 class="titre-projet">Pokeprojet: minijeu pokemon.</h2>
        <p class="detail-projet">Front-end · Back-end</p>
        <div class="to-projects">
          <RouterLink to="/Projets/pokeprojet">Découvrir le projet ↗</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
