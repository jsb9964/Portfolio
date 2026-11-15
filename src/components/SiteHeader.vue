<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

// Le header doit être affiché avant de rechercher le bouton et la navigation.
onMounted(() => {
  const menuBouton = document.querySelector('#menu-bouton')
  const menu = document.querySelector('.navbar')

  menuBouton.addEventListener('click', () => {
    // Ces classes ouvrent le menu, changent le burger en croix et bloquent le défilement.
    menu.classList.toggle('open')
    menuBouton.classList.toggle('close')
    document.body.classList.toggle('menu-ouvert')
  })
  //ferme le menu lorsque l'on clique sur un lien
  menu.querySelectorAll('a').forEach((lien) => {
  lien.addEventListener('click', () => {
    menu.classList.remove('open')
    menuBouton.classList.remove('close')
    document.body.classList.remove('menu-ouvert')
  })
})
})
</script>

<style scoped src="../assets/SiteHeader.css"></style>

<template>
  <header class="site-header">
    <RouterLink class="titre-header" to="/">
      JANI SUBHANA-BORTHAIRE
    </RouterLink>


    <nav aria-label="Navigation principale" class="navbar">
      <RouterLink to="/Projets">Projets</RouterLink>
      <RouterLink to="/about">À propos</RouterLink>
      <RouterLink to="/Veille">Veille</RouterLink>
      <RouterLink to="/Contact">Contact</RouterLink>
    </nav>
    <div id="menu-bouton">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
    </div>
  </header>
</template>

