<template>
  <ski-column md="6" xs="12" class="project">
    <img class="image" :src="`/images/projects/${$t(`projects.project.${project}.image`)}.png`" :alt="project">
    <div class="caption">
      <h3>
        {{ $t(`projects.project.${project}.name`) }}
        <nuxt-link class="url" :to="projects[project]['url']">
          <ski-icon icon="box-arrow-up-right" />
        </nuxt-link>
      </h3>
      <p v-html="$t(`projects.project.${project}.description`)" />
      <ski-columns class="stores">
        <ski-column v-for="store in ['app-store', 'google-play']" :key="store" width="6">
          <nuxt-link class="store" :to="projects[project][store]">
            <img :src="`/images/projects/${store}.svg`" :alt="store">
          </nuxt-link>
        </ski-column>
      </ski-columns>
    </div>
  </ski-column>
</template>

<script>
export default {
  props: {
    project: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      projects: {
        werewolf: {
          url: 'https://werewolf.skyost.eu/',
          'google-play': 'https://play.google.com/store/apps/details?id=fr.skyost.werewolf',
          'app-store': 'https://itunes.apple.com/app/id1504559806'
        },
        bacomathiques: {
          url: 'https://bacomathiqu.es',
          'google-play': 'https://play.google.com/store/apps/details?id=fr.bacomathiques',
          'app-store': 'https://itunes.apple.com/app/id1458503418'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  text-align: center;

  .image {
    max-width: 100%;
    height: 400px;
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
