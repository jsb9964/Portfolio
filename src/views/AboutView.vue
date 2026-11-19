<script setup>
  const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped src="../assets/AboutView.css"></style>
<template>
  <main>
    <p class="eyebrow">À PROPOS DE MOI</p>
    <section class="introduction">
      <h1>Moi c'est Jani.</h1>
      <p class="phrase-principale">Étudiant en BTS SIO, option SLAM.</p>
      <p class="phrase-secondaire">J'aime comprendre comment les choses fonctionnent, les construire et les améliorer.</p>
      <span class="separation"></span>
    </section>
    <section class="cv-formations">
      <section class="cv">
        <img src="/images/cv-stage26-JaniSB.jpg" alt="CV de Jani" class="image-cv">
        <a :href="baseUrl + 'pdf/cv-stage26-JaniSB.pdf'" class="telecharger-cv" download>Télécharger mon CV.</a>
        <a :href="baseUrl + 'pdf/grille-U5.pdf'" class="telecharger-cv" target="_blank" rel="noreferrer">Consulter mon tableau de synthèse U5</a>
      </section>
      <section class="formations">
        <p class="eyebrow">MON PARCOURS</p>
        <h2 class="titre-cartes">Une reconversion</h2>
        <div class="all-formations">
          <div class="formation">
            <p class="date-formation">2018</p>
            <h3 class="titre-formation">Bac STI2D · option SIN</h3>
            <p class="descr-formation">Une première étape dans un parcours tourné vers les sciences et le numérique.</p>
          </div>
          <div class="formation">
            <p class="date-formation">2018–2019</p>
            <h3 class="titre-formation">Première année de DUT informatique</h3>
            <p class="descr-formation">Une première découverte des études en informatique.</p>
          </div>
          <div class="formation">
            <p class="date-formation">2019–2020</p>
            <h3 class="titre-formation">Formation de technicien assistant informatique</h3>
            <p class="descr-formation">Une expérience de formation avant de reprendre un parcours en développement.</p>
          </div>
          <div class="formation">
            <p class="date-formation">2025-Aujourd’hui</p>
            <h3 class="titre-formation">BTS SIO · option SLAM</h3>
            <p class="descr-formation">Je poursuis mon parcours dans le développement web.</p>
          </div>
        </div>
      </section>
    </section>
    <section class="experiences">
      <p class="eyebrow">MES EXPÉRIENCES</p>
      <h2 class="titre-cartes">Entre agriculture et informatique</h2>
      <div class="all-experiences">
        <div class="experience">
          <p class="date-experience">Stage · bientôt</p>
          <h3 class="titre-experience">Une prochaine expérience</h3>
          <p class="descr-experience">Un nouveau stage à venir, qui viendra ajouter une étape à mon parcours.</p>
        </div>
        <div class="experience">
          <p class="date-experience">Stage · 2026</p>
          <h3 class="titre-experience">CYBERANDCO</h3>
          <p class="descr-experience">Stage en développement web autour du site LCBO Athlétisme : adaptation responsive d’un thème Blogger, CSS, tests et documentation.</p>
        </div>
        <div class="experience">
          <p class="date-experience">Expérience professionnelle · 2021-2024</p>
          <h3 class="titre-experience">Récolte de piments · Atelier du Piment</h3>
          <p class="descr-experience">Une expérience de travail qui fait aussi partie de mon parcours personnel, qui m'a appris le travail en équipe, le sens de la rigueur.</p>

        </div>
        <div class="experience">
          <p class="date-experience">Expérience professionnelle · 2020</p>
          <h3 class="titre-experience">Assistant informatique · Doctor IT</h3>
          <p class="descr-experience">Diagnostic et réparation de matériel, montage, nettoyage et maintenance d’ordinateurs.</p>
        </div>
      </div>
    </section>
    <section class="autre">
      <p class="eyebrow">EN DEHORS DU CODE</p>
      <h2 class="titre-cartes">Passionné de nature et de sports..</h2>
      <div class="all-loisirs">
        <div class="loisir">
          <h3 class="titre-loisir">Randonnée</h3>
          <p class="descr-loisir">J'adore la montagne, les balades en nature.</p>
        </div>
        <div class="loisir">
          <h3 class="titre-loisir">Course</h3>
          <p class="descr-loisir">Je fais aussi quelques courses à mes heures perdues</p>
        </div>
        <div class="loisir">
          <h3 class="titre-loisir">Skateboard</h3>
          <p class="descr-loisir">Passionné de sport de glisse, je ne compte plus les chutes...</p>
        </div>
        <div class="loisir">
          <h3 class="titre-loisir">Football</h3>
          <p class="descr-loisir">Courir derrière un ballon et marquer des buts, quoi de mieux !</p>
        </div>
      </div>
    </section>
  </main>
</template>
