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
  __name: "libranet",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Libranet"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/libranet.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> LIBRABET </h3><p class="supage-content__fBox__tBox__p f-600"> Seit seiner Gründung im Jahr 2018 hat sich LibraBet als einer der führenden Wettanbieter etabliert, der eine umfassende Auswahl an Sportwetten, attraktiven Quoten, exklusiven Boni und einem vielfältigen Angebot an Casinospielen bereithält. Als Teil der Rabidi N.V. und lizenziert auf Curaçao, bietet es ein legales Wettumfeld, besonders für österreichische Kunden. </p><p class="supage-content__fBox__tBox__p"> Im Sportwettenbereich hebt sich LibraBet durch sein umfangreiches Angebot hervor, das von Fußball, Tennis und Skifahren bis hin zu eSports-Wetten reicht, einschließlich populärer Titel wie CS:GO und Dota 2. Kunden profitieren von einem 100%igen Willkommensbonus bis zu 200 € für Sportwetten, wobei die Mindesteinzahlung 20 € beträgt und bestimmte Zahlungsmethoden wie Neteller und Skrill ausgeschlossen sind. Die Umsatzbedingungen erfordern, dass der Bonusbetrag innerhalb von 30 Tagen 5-mal mit einer Mindestquote von 2.00 bei Einzelwetten oder 1.50 pro Auswahl bei Kombiwetten umgesetzt wird. Diese Anforderungen ermöglichen es den Nutzern, die Website, ihre Wettoptionen und Sportarten gründlich kennenzulernen, wobei der Fokus auf einem risikoärmeren Einstieg und der Möglichkeit liegt, neue Sportarten oder Wettstrategien auszuprobieren. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://lrb.servclick1move.com/?mid=97525_728869">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/libranet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=libranet-B_L2eB6z.js.map
