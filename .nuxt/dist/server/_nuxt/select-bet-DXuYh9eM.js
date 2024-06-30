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
  __name: "select-bet",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SELECT.BET"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/select-bet.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> SELECT.BET </h3><p class="supage-content__fBox__tBox__p f-600"> Select.bet, betrieben von der Bellona N.V., ist ein Buchmacher, der seit 2010 auf dem Markt aktiv ist und sich auf Sportwetten spezialisiert hat. Neue Kunden werden mit einem attraktiven 100% Willkommensbonus bis zu 200 Euro auf die erste Einzahlung begrüßt, wofür eine Mindesteinzahlung von 10 Euro erforderlich ist und der Bonus-Code „NEWBONUSS“ angegeben werden muss. Um den Bonus und daraus resultierende Gewinne auszahlen zu können, müssen Kunden ein 16-faches Umsatzziel des Bonusguthabens innerhalb von 21 Tagen erreichen, was strenge Bedingungen darstellt. Wetten müssen dabei eine Mindestquote von 1,80 aufweisen, und bestimmte Wettarten sind vom Bonus ausgeschlossen. </p><p class="supage-content__fBox__tBox__p"> Select.bet bietet ein umfangreiches Wettangebot mit 25 Sportarten, darunter Fußball, Tennis, Basketball, und Eishockey sowie Nischensportarten wie Federball. Besonders hervorzuheben ist das Angebot an Fußballwetten, das internationale Wettbewerbe und Ligen umfasst. Bei Fußballspielen werden bis zu 300 Wettoptionen angeboten. Darüber hinaus sind eSports und Spezialwetten Teil des Portfolios, wobei Live-Wetten zu jeder Tageszeit verfügbar sind. Trotz des Fehlens eines VIP- oder Treueprogramms bietet Select.bet regelmäßige Promotionen und einen Reload-Bonus an. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" href="#">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/select-bet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=select-bet-DXuYh9eM.js.map
