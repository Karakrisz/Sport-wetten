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
  __name: "prontobet",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Prontobet"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/prontobet.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Prontobet </h3><p class="supage-content__fBox__tBox__p f-600"> ProntoBet, mit einem Team, das über langjährige Erfahrung in der iGaming-Branche verfügt, hat sich zum Ziel gesetzt, eine schnelle und benutzerfreundliche Plattform zu schaffen, die sich durch einfache Zugänglichkeit und schnelle Abwicklung von Transaktionen auszeichnet. Dabei legt ProntoBet großen Wert auf die Zusammenarbeit mit führenden Softwareanbietern, um eine breite Palette an aktuellen und ansprechenden Spielen anzubieten. Kundenloyalität wird großgeschrieben, mit täglichen Cashbacks und regelmäßigen Belohnungen für aktive Spieler. Sicherheit und Zuverlässigkeit sind Kernprinzipien, um ein sorgenfreies Spielerlebnis zu garantieren. </p><p class="supage-content__fBox__tBox__p"> Der Willkommensbonus von 200% bis zu €1,000 unterstreicht das Engagement von ProntoBet, neue Kunden großzügig zu belohnen, wobei der Bonus nach Erfüllung der Umsatzbedingungen von 30x in Echtgeld umgewandelt wird. Dieses Angebot ist speziell auf Casino-Spiele ausgerichtet und demonstriert ProntoBets Ambition, sich als führende Plattform in diesem Bereich zu etablieren, mit einem klaren Fokus auf Kundenzufriedenheit und ein attraktives Bonusprogramm. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://login.grandeaffiliates.com/signin.php">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prontobet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=prontobet-DWRwTNED.js.map
