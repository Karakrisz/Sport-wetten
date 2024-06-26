<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const specialPaths = [
  '/euro-2024',
  '/sportwetten-tipps',
  '/die-besten-wettanbiete',
  '/fudball-news',
  '/blog',
  '/rabona',
  '/bankonbet',
  '/libranet',
  '/spinanga',
  '/nomini',
  '/sport-wetten',
  '/bwin',
  '/betathome',
  '/interwetten',
  '/prontobet',
  '/20bet',
  '/select-bet',
  '/tipico',
  '/bet365',
  '/great-win',
]

const isSpecialPage = computed(() => specialPaths.includes(route.path))

const links = [
  { name: 'Home', path: '/' },
  { name: 'Euro 2024', path: '/euro-2024' },
  { name: 'Sportwetten-Tipps', path: '/sportwetten-tipps' },
  { name: 'Die besten Wettanbieter', path: '/die-besten-wettanbiete' },
  { name: 'Fußball News', path: '/fudball-news' },
  { name: 'Blog', path: '/blog' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header pr">
    <div
      :class="[
        'header-content d-flex',
        { 'header-content-bg-special': isSpecialPage },
      ]"
    >
      <div class="logo-box header-content__logo-box">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/header/logo.svg"
            alt="Sport wetten"
            class="header-content__logo-box__link__img"
          />
        </NuxtLink>
      </div>
      <div class="nav-box header-content__nav-box d-flex">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="[
                  'menu__item text-color-w text-transform-uppercase f-600',
                ]"
              >
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
