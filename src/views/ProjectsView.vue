<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped src="../assets/ProjectsView.css"></style>

<template>
  <main>
    <p class="eyebrow">Projets</p>
    <section class="intro-projets">
      <h1>Ce que j'ai construit</h1>
      <p class="phrase-principale">Voici ce que j'ai pu faire durant mon apprentissage.</p>
    </section>
    <span class="separation"></span>
    <section class="liste-projets" aria-label="Mes projets">
      <RouterLink
        to="/Projets/blogger-responsive"
        class="lien-projet"
      >
        <article class="projet">
            <img src="/images/apercu-lcboathle.png" alt="aperçu du site" class="apercu-projet">
          <span class="numero-projet">01</span>

          <div class="contenu-projet">
            <p class="categorie-projet">Stage · Développement web</p>
            <h2 class="titre-projet">Adapter un site à tous les écrans.</h2>
            <p class="descr-projet">Modernisation responsive d'un thème Blogger pour le site de LCBO Athlétisme.</p>
            <p class="kp-projet">Blogger · Responsive</p>
            <span class="decouvrir-projet">Découvrir le projet ↗</span>
          </div>
        </article>
      </RouterLink>
      <RouterLink
        to="/Projets/portfolio"
        class="lien-projet"
      >
        <article class="projet">
            <img src="/images/apercu-portfolio.png" alt="aperçu du site" class="apercu-projet">
          <span class="numero-projet">02</span>

          <div class="contenu-projet">
            <p class="categorie-projet">Projet personnel · Développement web</p>
            <h2 class="titre-projet">Portfolio.</h2>
            <p class="descr-projet">Création de mon portfolio personnel.</p>
            <p class="kp-projet">Vue.js · Front-end · JavaScript</p>
            <span class="decouvrir-projet">Découvrir le projet ↗</span>
          </div>
        </article>
      </RouterLink>
      <RouterLink
        to="/Projets/pokeprojet"
        class="lien-projet"
      >
        <article class="projet">
            <img src="/images/apercu-pokeprojet.png" alt="aperçu du projet" class="apercu-projet">
          <span class="numero-projet">03</span>

          <div class="contenu-projet">
            <p class="categorie-projet">Projet d'école · Développement web</p>
            <h2 class="titre-projet">Pokeprojet: Un mini jeu pokémon. <br>(EN COURS..)</h2>
            <p class="descr-projet">Création d'un jeu de combat pokémon.</p>
            <p class="kp-projet">PHP · Back-end · Front-end</p>
            <span class="decouvrir-projet">Découvrir le projet ↗</span>
          </div>
        </article>
      </RouterLink>
    </section>
  </main>
</template>