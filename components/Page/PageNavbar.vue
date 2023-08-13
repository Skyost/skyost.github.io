<script setup lang="ts">
const props = withDefaults(defineProps<{
  minimumTop?: number,
  whiteAnchor?: string
}>(), {
  minimumTop: 60,
  whiteAnchor: 'skills-section'
})

const anchors = {
  me: 'person-vcard',
  skills: 'bar-chart-line',
  projects: 'list-ul',
  contact: 'envelope'
}

const resizeObserver = ref<ResizeObserver | null>(null)
const isWhite = ref<boolean>(false)
const isFixed = ref<boolean>(false)
const whiteAnchorTop = ref<number>(100)
const currentActive = ref<string>('me')
const anchorsTop = ref<{ [key: string]: number }>({})
const navbarElement = ref<HTMLElement | null>(null)
const shadowElement = ref<HTMLElement | null>(null)

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  resizeObserver.value?.disconnect()
})

onMounted(async () => {
  await nextTick()
  refreshComponent()
  resizeObserver.value = new ResizeObserver(refreshComponent)
  resizeObserver.value!.observe(document.body)
})

const refreshComponent = () => {
  whiteAnchorTop.value = document.getElementById(props.whiteAnchor)!.offsetTop
  anchorsTop.value = {}
  for (const anchor in anchors) {
    anchorsTop.value[anchor] = document.getElementById(anchor)!.offsetTop
  }
  shadowElement.value!.style.height = `${navbarElement.value!.offsetHeight}px`
  shadowElement.value!.style.width = `${navbarElement.value!.offsetWidth}px`
}

const handleScroll = () => {
  isFixed.value = document.documentElement.scrollTop >= props.minimumTop
  isWhite.value = document.documentElement.scrollTop - props.minimumTop >= whiteAnchorTop.value
  let newCurrentActive = 'me'
  for (const anchorTop in anchorsTop.value) {
    if (document.documentElement.scrollTop >= anchorsTop.value[anchorTop]) {
      newCurrentActive = anchorTop
    }
  }
  currentActive.value = newCurrentActive
}
</script>

<template>
  <div class="position-relative">
    <nav id="page-navbar" ref="navbarElement" :class="{white: isWhite, 'position-fixed': isFixed}">
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
    <div ref="shadowElement" class="shadow" :class="{'position-fixed': isFixed}" />
  </div>
</template>

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
