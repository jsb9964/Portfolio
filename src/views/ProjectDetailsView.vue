<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import projects from '../data/projects.js'

const route = useRoute()

const project = computed(() => {
  return projects.find((item) => item.slug === route.params.slug)
})
</script>

<style scoped src="../assets/ProjectDetailsView.css"></style>

<template>
  <main v-if="project" class="detail-projet">
    <RouterLink class="retour-projets" to="/Projets">
      ← Tous les projets
    </RouterLink>

    <section class="intro-detail">
      <p class="categorie-projet">{{ project.categorie }}</p>
      <h1>{{ project.titre }}</h1>
      <p class="description-projet">{{ project.description }}</p>

      <p class="technologies-projet">
        {{ project.technologies.join(' · ') }}
      </p>
    </section>

    <img
      class="apercu-detail"
      :src="project.image"
      :alt="project.alt"
    >

    <section class="sections-detail" aria-label="Détails du projet">
      <article
        v-for="section in project.sections"
        :key="section.titre"
        class="section-projet"
      >
        <h2>{{ section.titre }}</h2>
        <p>{{ section.texte }}</p>
      </article>
    </section>
    <!-- Affiche la section uniquement si le projet a au moins un document. -->
    <section
      v-if="project.documents && project.documents.length"
      class="documents-projet"
    >

      <h2>Documents du projet</h2>

      <ul class="liste-documents">
        <!-- Crée une ligne avec un lien de téléchargement pour chaque document du tableau. -->
        <li
          v-for="document in project.documents"
          :key="document.nomFichier"
          class="ligne-document"
        >
          <div>
            <h3>{{ document.titre }}</h3>
            <p>{{ document.description }}</p>
          </div>

          <a :href="document.url" :download="document.nomFichier">
            Télécharger ↗
          </a>
        </li>
      </ul>
    </section>
    <div v-if="project.telechargement" class="conteneur-telechargement">
        <a
        class="telecharger-projet"
        :href="project.telechargement"
        download
        >
        Télécharger le dossier du projet (.zip) ↗
        </a>
    </div>
    <div v-if="project.lienGithub" class="conteneur-telechargement">
        <a
        class="telecharger-projet"
        :href="project.lienGithub"
        >
        Voir le repository sur GITHUB ↗
        </a>
    </div>
  </main>

  <!-- La route existe, mais ce slug ne correspond à aucun projet. -->
  <main v-else class="projet-introuvable">
    <RouterLink to="/Projets" class="retour-projets">← Retour aux projets</RouterLink>  
    <p class="eyebrow">Projet introuvable</p>
    <h1>Ce projet n’existe pas.</h1>
  </main>
</template>