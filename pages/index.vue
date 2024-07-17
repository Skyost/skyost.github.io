<script setup lang="ts">
import SocialIcons from '~/components/Portfolio/SocialIcons/SocialIcons.vue'
import SocialIcon from '~/components/Portfolio/SocialIcons/SocialIcon.vue'
import Skills from '~/components/Portfolio/Skills/Skills.vue'
import Skill from '~/components/Portfolio/Skills/Skill.vue'
import Projects from '~/components/Portfolio/Projects/Projects.vue'
import Project from '~/components/Portfolio/Projects/Project.vue'
import PaypalButton from '~/components/Portfolio/Projects/PaypalButton.vue'
import ContactForm from '~/components/Portfolio/ContactForm.vue'
import PageSection from '~/components/Page/PageSection.vue'
</script>

<template>
  <page-content>
    <page-section
      id="me-section"
      class="blue text-center"
    >
      <img
        class="logo"
        src="/images/skyost.png"
        alt="Skyost"
      >
      <h1 class="title">
        Skyost
      </h1>
      <h2
        id="me"
        class="subtitle"
      >
        Yet Another Developer
      </h2>

      <social-icons>
        <social-icon social="twitter" />
        <social-icon social="github" />
        <social-icon social="google-play" />
        <social-icon social="apple" />
        <social-icon social="linkedin" />
      </social-icons>

      <p v-html="$t('me.description1')" />
      <p
        class="mb-0"
        v-html="$t('me.description2')"
      />
    </page-section>
    <page-section id="skills-section">
      <h2
        id="skills"
        class="mb-5"
      >
        {{ $t('skills.title') }}
      </h2>

      <skills>
        <skill
          class="mb-5 mb-md-0"
          skill="desktop"
        />
        <skill
          class="mb-5 mb-md-0"
          skill="mobile"
        />
        <skill skill="web" />
      </skills>
    </page-section>
    <page-section id="projects-section">
      <h2 id="projects">
        {{ $t('projects.title') }}
      </h2>

      <p class="text-center">
        <em>
          {{ $t('projects.description1') }}
        </em>
      </p>

      <projects class="mt-5 mb-5">
        <project
          class="mb-5 mb-md-0"
          project="werewolf"
        />
        <project project="authenticator" />
      </projects>

      <p
        class="text-center"
        v-html="$t('projects.description2')"
      />

      <paypal-button class="mt-5 mb-3 paypal-button" />

      <p class="help-text text-center">
        <strong>
          {{ $t('projects.description3') }}
        </strong>
      </p>
    </page-section>
    <page-section>
      <h2
        id="contact"
        class="mb-3"
      >
        {{ $t('contact.title') }}
      </h2>
      <contact-form />
    </page-section>
    <page-section id="footer-section">
      <page-footer />
    </page-section>
  </page-content>
</template>

<style lang="scss" scoped>
@import 'assets/colors';

#me-section {
  padding-top: 50px;
  padding-bottom: 50px;

  .logo {
    width: 180px;
    border-radius: 100%;
    margin-bottom: 30px;
  }

  .title {
    color: white;
  }

  .subtitle {
    opacity: 0.7;
    margin-bottom: 0.5rem;
    border-bottom: 0 !important;
  }
}

#skills-section {
  padding-top: 30px;
}

#projects-section {
  .paypal-button {
    display: block;
    width: 70%;
    margin: auto;
  }

  .help-text {
    color: $primary;
    font-size: 1.2em;
  }
}

#footer-section {
  padding-bottom: 30px;
}
</style>
