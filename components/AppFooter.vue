<script setup></script>

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
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
            About Us
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
            Contact
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
            Privacy Policy
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
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
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
            Cookie Policy
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
            Data Protection
          </NuxtLink>
        </p>
        <p class="footer-content__linkBox__p">
          <NuxtLink class="footer-content__linkBox__p__link text-color-w">
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
