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
  __name: "nomini",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Nomini"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/nomini.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> NOMINI </h3><p class="supage-content__fBox__tBox__p f-600"> Nomini taucht seine Nutzer in eine farbenfrohe Welt voller Obst und Früchte, die nicht nur einzigartige Gamification-Elemente bietet, sondern auch reichhaltige Bonusaktionen für Sportwetten. Das Unternehmen sticht mit seiner verspielten Aufmachung hervor und verbindet Casino-Flair mit dem Nervenkitzel von Sportwetten, was es zu einer attraktiven Plattform für Wettbegeisterte macht. </p><p class="supage-content__fBox__tBox__p"> Im Bereich der Sportwetten zeigt sich Nomini besonders stark durch seine Vielfalt an Bonusangeboten. Der Willkommensbonus umfasst 100% bis zu 200€, wobei eine Mindesteinzahlung von 20€ erforderlich ist und die Einzahlungssumme einmal auf Quoten über 1,50 gesetzt werden muss. Anschließend müssen Einzahlung und Bonus fünfmal mit einer Mindestquote von 2,00 umgesetzt werden, bei Kombiwetten reicht eine Quote von 1,50 pro Auswahl. Wöchentliche Reload-Boni und Cashbacks für virtuelle Sportarten sowie ein VIP-Programm mit steigendem Cashback und höheren Auszahlungslimits bereichern das Spielerlebnis zusätzlich. </p><p class="supage-content__fBox__tBox__p"> Die Wettangebote umfassen rund 30 Sportarten, einschließlich virtueller Sportwetten und eSports, während die Livewetten mit erstklassigen Statistiken und teilweise kostenlosen Livestreams überzeugen. Quotenbewertungen ergeben ein stabiles Niveau mit Spitzenwerten, was die Attraktivität von Nomini für Wettbegeisterte weiter unterstreicht. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://nmn.servclick1move.com/?mid=97525_728877">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nomini.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=nomini-C2qxscMJ.js.map
