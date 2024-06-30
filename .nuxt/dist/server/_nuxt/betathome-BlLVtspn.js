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
  __name: "betathome",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bet-at-home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/bet-at-home.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Bet-at-home </h3><p class="supage-content__fBox__tBox__p f-600"> Bet-at-home, ein renommierter Buchmacher aus Österreich, zeichnet sich durch sein umfangreiches Wettangebot aus, das besonders auf Fußball fokussiert ist. Kunden können auf eine Vielzahl von Ligen und Wettbewerben weltweit setzen, einschließlich aller wichtigen europäischen Turniere und sogar exotischerer Ligen. Darüber hinaus umfasst das Angebot Wetten auf Eishockey, Tennis, Basketball, Handball und viele weitere Sportarten, wobei für die bedeutendsten Fußballligen rund 120 Wettquoten pro Spiel angeboten werden. Bet-at-home bietet auch Langzeitwetten auf Meisterschaften, Absteiger und Torschützenkönige an, ergänzt durch ein solides Angebot an Wettoptionen und das beliebte Cashout-Feature. Im Bereich der Live-Wetten überzeugt der Anbieter mit Vielfalt und Übersichtlichkeit. </p><p class="supage-content__fBox__tBox__p"> Der Willkommensbonus bei bet-at-home variiert, wobei Neukunden entweder einen 50% Bonus oder in besonderen Fällen einen 100% Bonus bis zu 100 Euro erhalten können. Die Aktivierung des Bonus erfolgt durch den Code &quot;WILLKOMMEN&quot; bei der ersten Einzahlung. Die Umsatzbedingungen sind transparent und userfreundlich gestaltet: Einzahlungs- und Bonusbetrag müssen viermal mit einer Mindestquote von 1,70 umgesetzt werden, innerhalb von 90 Tagen. Damit positioniert sich bet-at-home als attraktiver Anbieter für Sportwetten-Enthusiasten, die Wert auf ein breites Wettangebot und faire Bonuskonditionen legen. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://affiliates.bet-at-home.com/login.asp?">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/betathome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=betathome-BlLVtspn.js.map
