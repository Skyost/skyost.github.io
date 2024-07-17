<script setup lang="ts">
import Phone from '~/components/Portfolio/Projects/Phone.vue'

interface Project {
  url: string
  stores: { [key: string]: string }
}

defineProps<{ project: string }>()

const projects: { [key: string]: Project } = {
  werewolf: {
    url: 'https://werewolf.skyost.eu/',
    stores: {
      'google-play': 'https://play.google.com/store/apps/details?id=fr.skyost.werewolf',
      'app-store': 'https://itunes.apple.com/app/id1504559806'
    }
  },
  authenticator: {
    url: 'https://openauthenticator.app',
    stores: {
      'google-play': 'https://play.google.com/store/apps/details?id=app.openauthenticator',
      'app-store': 'https://itunes.apple.com/app/id6479272927'
    }
  }
}
</script>

<template>
  <b-col
    md="6"
    xs="12"
    class="project"
  >
    <phone>
      <img
        class="image"
        :src="`/images/projects/${$t(`projects.project.${project}.image`)}.png`"
        :alt="project"
      >
    </phone>
    <div class="caption">
      <h3>
        {{ $t(`projects.project.${project}.name`) }}
        <nuxt-link
          class="url"
          :to="projects[project]['url']"
        >
          <icon name="bi:box-arrow-up-right" />
        </nuxt-link>
      </h3>
      <p v-html="$t(`projects.project.${project}.description`)" />
      <b-row class="stores">
        <b-col
          v-for="(store, storeName) in projects[project].stores"
          :key="storeName"
          width="6"
        >
          <nuxt-link
            class="store"
            :to="store"
          >
            <img
              :src="`/images/projects/${storeName}.svg`"
              :alt="store"
            >
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<style lang="scss" scoped>
.project {
  position: relative;
  text-align: center;

  .image {
    width: 100%;
  }

  .caption {
    text-align: left;
    background: linear-gradient(transparent, white 40px);
    position: absolute;
    top: 60%;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 60px 20px 20px 20px;
    overflow: hidden;
    transition: top 0.5s, padding-top 0.5s;

    h3 {
      font-weight: lighter;
    }

    .url {
      float: right;
      margin-top: 3px;
      font-size: 0.8em;
    }

    &::before {
      content: '';
      position: absolute;
      height: 50px;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(transparent, white);
    }

    &:hover,
    &:active,
    &:focus {
      top: 0;
      padding-top: 0;
      background: white;
    }
  }

  .stores {
    text-align: center;

    .store {
      display: inline-block;
      width: 100%;
      max-width: 300px;

      img {
        width: 100%;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }
}
</style>
