<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped src="../assets/NotFoundView.css"></style>

<template>
  <main class="not-found">
    <p class="eyebrow">Erreur 404 · Page introuvable</p>

    <p class="numero-erreur" aria-hidden="true">404</p>

    <h1>On a fait fausse route.</h1>

    <p class="message-notfound">
      Cette page n’existe pas ou a changé d’adresse.
      Reprenons depuis le début.
    </p>

    <RouterLink class="retour-accueil" to="/">
      Retour à l’accueil ↗
    </RouterLink>
  </main>
</template>