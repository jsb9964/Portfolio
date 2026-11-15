<style scoped src="../assets/VeilleView.css"></style>

<template>
  <main class="veille">
    <section class="intro-veille">
      <div class="texte-intro">
        <p class="eyebrow">Veille</p>
        <h1>Ce qui nourrit ma curiosité.</h1>
        <p class="description-veille">
          Je suis trois sujets liés à mon parcours : l’IA, le développement
          web et la cybersécurité. TheOldReader me permet de regrouper
          mes sources RSS.
        </p>
      </div>

      <div class="outil-veille">
        <p>TheOldReader</p>
        <span>Flux RSS</span>
      </div>
    </section>

    <section class="lectures-veille" aria-label="Articles de veille">
      <article class="article-vedette">
        <div>
          <p class="categorie-article">Développement Web · Outils</p>
          <h2>Pourquoi les outils de développement Web deviennent-ils plus rapides ?</h2>
          <p class="resume-article">
            Avec Vite 8 un nouvel outil remplace les deux outils utilisés auparavant. L'objectif : accélerer la création de la version finale du site. 
          </p>
        </div>

        <a
          class="lien-source"
          href="https://vite.dev/blog/announcing-vite8"
          target="_blank"
          rel="noreferrer"
        >
          Lire l'article ↗
        </a>
      </article>

      <div class="articles-secondaires">
        <article class="article-secondaire">
          <p class="categorie-article">Développement web · MDN</p>
          <h2>Responsive web design</h2>
          <p class="resume-article">
            Les mises en page souples et les media queries aident à adapter
            un site aux écrans. Un sujet directement lié à mon stage sur le
            thème Blogger de LCBO Athlétisme.
          </p>
          <a
            class="lien-source"
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"
            target="_blank"
            rel="noreferrer"
          >
            Lire sur MDN ↗
          </a>
        </article>

        <article class="article-secondaire">
          <p class="categorie-article">
            Cybersécurité · CERT-FR · ANSSI
          </p>
          <h2>PHP2SHELL : Deux failles critiques dans php</h2>
          <p class="resume-article">
            Mises à jour, comptes protégés, sauvegardes et HTTPS :
            des réflexes à garder en tête avant de publier mes projets.
          </p>
          <a
            class="lien-source"
            href="https://cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1359/"
            target="_blank"
            rel="noreferrer"
          >
            Lire l'avis du CERT-FR ↗
          </a>
        </article>
      </div>
    </section>

    <section class="sources-veille" aria-label="Sources suivies">
      <p class="eyebrow">Sources que je suis</p>

      <div class="liste-sources">
        <a href="https://www.cnil.fr/" target="_blank" rel="noreferrer">CNIL</a>
        <a href="https://cert.cyber.gouv.fr/" target="_blank" rel="noreferrer">CERT-FR</a>
        <a href="https://www.cybermalveillance.gouv.fr/" target="_blank" rel="noreferrer">
          Cybermalveillance
        </a>
        <a href="https://developer.mozilla.org/fr/" target="_blank" rel="noreferrer">MDN</a>
        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3Schools</a>
        <a href="https://www.it-connect.fr/" target="_blank" rel="noreferrer">IT-Connect</a>
      </div>
    </section>
  </main>
</template>