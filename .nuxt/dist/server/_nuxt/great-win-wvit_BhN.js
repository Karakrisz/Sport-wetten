import { u as useHead, b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
const _sfc_main = {
  __name: "great-win",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Greatwin"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/great-win.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Greatwin </h3><p class="supage-content__fBox__tBox__p f-600"> Greatwin, ein Sportwettenanbieter, der seit Mai 2022 online ist, hat sich schnell als vertrauenswürdige Plattform etabliert, unterstützt durch ein renommiertes Unternehmen mit umfangreicher Erfahrung in der Sportwettenbranche. Die Sicherheit und Seriosität von Greatwin wird durch eine Lizenz aus Curacao und einen professionellen Hintergrund des Betreibers gewährleistet. Bei Greatwin erleichtert ein benutzerfreundlicher Registrierungsprozess den Einstieg für neue Nutzer, die nach erfolgreicher Anmeldung und Einzahlung auf ein breites Angebot an Sportwetten zugreifen können. </p><p class="supage-content__fBox__tBox__p"> Die Einzahlungsmöglichkeiten sind vielfältig, ohne Gebühren, und unterstützen Transaktionen über gängige Zahlungsmethoden wie Kreditkarten, Klarna, Skrill, Eco Payz, Apple Pay, Paysafecard, eWallets, Neteller und Kryptowährungen, was die Plattform besonders zugänglich macht. Greatwin hebt sich durch einfache Wettabgabe, attraktive Quoten und eine Vielfalt an Sportarten und Wettmöglichkeiten hervor. Der Willkommensbonus, der einen 100 % Einzahlungsbonus bis zu 200 € umfasst, sowie weitere Boni und Promotionen für Bestandskunden, wie wöchentliche Boni, Cashback Boni und spezielle Angebote, tragen zur Attraktivität von Greatwin bei und bieten den Nutzern zusätzliche Anreize. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://awbba.zetcasino.com/redirect.aspx?pid=1374186&amp;bid=7577">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/great-win.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=great-win-wvit_BhN.js.map
