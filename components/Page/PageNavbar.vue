<template>
  <div class="position-relative">
    <nav id="page-navbar" ref="navbar" :class="{white: isWhite, 'position-fixed': isFixed}">
      <ol>
        <li>
          <img class="logo" src="/images/skyost.png" alt="Skyost">
        </li>
        <li v-for="(icon, anchor) in anchors" :key="anchor">
          <nuxt-link
            :to="`#${anchor}`"
            class="page-navbar-link"
            :class="{active: currentActive === anchor}"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            :data-bs-title="$t(`navbar.${anchor}`)"
          >
            <ski-icon :icon="icon" />
          </nuxt-link>
        </li>
      </ol>
    </nav>
    <div ref="shadow" class="shadow" :class="{'position-fixed': isFixed}" />
  </div>
</template>

<script>
export default {
  props: {
    minimumTop: {
      type: Number,
      default: 60
    },
    whiteAnchor: {
      type: String,
      default: 'skills-section'
    }
  },
  data () {
    return {
      isWhite: false,
      isFixed: false,
      whiteAnchorTop: 100,
      currentActive: 'me',
      anchors: {
        me: 'person-vcard',
        skills: 'bar-chart-line',
        projects: 'list-ul',
        contact: 'envelope'
      },
      anchorsTop: {},
      resizeObserver: null
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    this.resizeObserver?.disconnect()
  },
  async mounted () {
    await this.$nextTick()
    this.refreshComponent()
    this.resizeObserver = new ResizeObserver(this.refreshComponent)
    this.resizeObserver.observe(document.body)
  },
  methods: {
    refreshComponent () {
      this.whiteAnchorTop = document.getElementById(this.whiteAnchor).offsetTop
      this.anchorsTop = {}
      for (const anchor in this.anchors) {
        this.anchorsTop[anchor] = document.getElementById(anchor).offsetTop
      }
      this.$refs.shadow.style.height = `${this.$refs.navbar.offsetHeight}px`
      this.$refs.shadow.style.width = `${this.$refs.navbar.offsetWidth}px`
    },
    handleScroll () {
      this.isFixed = document.documentElement.scrollTop >= this.minimumTop
      this.isWhite = document.documentElement.scrollTop - this.minimumTop >= this.whiteAnchorTop
      let currentActive = 'me'
      for (const anchorTop in this.anchorsTop) {
        if (document.documentElement.scrollTop >= this.anchorsTop[anchorTop]) {
          currentActive = anchorTop
        }
      }
      this.currentActive = currentActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/bootstrap-mixins';
@import 'assets/colors';

#page-navbar {
  position: absolute;
  background-color: $primary;
  font-size: 1.7rem;
  padding: 0.15em 0.75em;
  transition: background-color 0.2s, color 0.2s;
  top: 0;

  @include media-breakpoint-down(lg) {
    width: 100%;
    background-color: darken($primary, 10%);
  }

  &.white {
    background-color: white;

    .page-navbar-link {
      color: darken($light, 25%);
      transition: color 0.2s;

      &.active {
        color: $primary !important;
      }

      &:hover {
        color: darken($light, 40%);
      }
    }
  }

  ol {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;

    @include media-breakpoint-down(lg) {
      display: flex;
    }

    .logo {
      height: 1.2em;
      border-radius: 100%;
      vertical-align: sub;
    }

    li {
      margin: 0.4em 0;
      text-align: center;

      .page-navbar-link {
        color: rgba(white, 0.5);
        transition: color 0.2s;

        &.active {
          color: white !important;
        }

        &:hover {
          color: rgba(white, 0.8);
        }
      }

      @include media-breakpoint-down(lg) {
        display: inline-block;
        flex: 1;
      }
    }
  }
}

.shadow {
  position: absolute;
  box-shadow: 0 0 100px #969696;
  top: 0;
  z-index: -1;
}
</style>
