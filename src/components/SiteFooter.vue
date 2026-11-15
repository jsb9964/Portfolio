<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped src="../assets/SiteFooter.css"></style>

<template>
  <footer class="site-footer">
    <div class="identite-footer">
      <p class="nom-footer">JANI SUBHANA-BORTHAIRE</p>
      <p>Tous droits réservés.</p>
    </div>

    <div class="liens-footer">
      <RouterLink to="/Contact">Contactez-moi !</RouterLink>
      <RouterLink to="/Mentions-legales">Mentions légales</RouterLink>
    </div>

    <p class="mention-footer">Portfolio personnel · BTS SIO SLAM</p>
  </footer>
</template>
