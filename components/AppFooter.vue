<script setup>
const FooterLinks = [
  { name: 'Home', path: '/' },
  { name: 'Euro 2024', path: '/partnerek' },
  { name: 'Sportwetten-Tipps', path: '/szolgaltatasok' },
  { name: 'Die besten Wettanbieter', path: '/dokumentumok' },
  { name: 'Fußball News', path: '/ajanlatkeres' },
  { name: 'Blog', path: '/kapcsolat' },
]
</script>

<template>
  <footer>
    <div class="footer-content d-flex pr">
      <div class="footer-content__ilBox">
        <NuxtImg
          src="/img/footer/logo.svg"
          alt="Sport wetten"
          class="footer-content__ilBox__img"
          height="100%"
        />

        <div class="footer-content__ilBox__social-links text-center">
          <a href="#">
            <NuxtImg
              src="/img/footer/instagram.svg"
              alt="Sport wetten"
              class="footer-content__ilBox__social-links__img"
              height="100%"
            />
          </a>
          <a href="#">
            <NuxtImg
              src="/img/footer/facebook.svg"
              alt="Sport wetten"
              class="footer-content__ilBox__social-links__img"
              height="100%"
            />
          </a>
          <a href="#">
            <NuxtImg
              src="/img/footer/youtube.svg"
              alt="Sport wetten"
              class="footer-content__ilBox__social-links__img"
              height="100%"
            />
          </a>
        </div>
      </div>
      <div class="footer-content__linkBox">
        <h5
          class="footer-content__linkBox__h5 f-600 text-transform-uppercase text-color-w"
        >
          INFORMATIONAL
        </h5>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            About Us
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            Contact
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            Privacy Policy
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            FAQ
          </NuxtLink>
        </p>
      </div>

      <div class="footer-content__linkBox">
        <h5
          class="footer-content__linkBox__h5 f-600 text-transform-uppercase text-color-w"
        >
          LEGAL
        </h5>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            Cookie Policy
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            Data Protection
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w f-400">
            Terms and Conditions
          </NuxtLink>
        </p>
      </div>

      <div class="footer-content__linkBox">
        <h5
          class="footer-content__linkBox__h5 f-600 text-transform-uppercase text-color-w"
        >
          NAVIGATION
        </h5>

        <div class="footer-content__linkBox__box d-flex">
          <NuxtLink
            v-for="link in FooterLinks"
            :key="link.path"
            :to="link.path"
            :class="['footer-content__linkBox__box__link text-color-w f-300']"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="footer-content__DigitalSeedBrand pa">
        <NuxtImg
          src="/img/footer/digitalSeed.svg"
          alt="Sport wetten"
          class="footer-content__DigitalSeedBrand__img"
          height="100%"
        />
      </div>
    </div>
  </footer>
</template>
