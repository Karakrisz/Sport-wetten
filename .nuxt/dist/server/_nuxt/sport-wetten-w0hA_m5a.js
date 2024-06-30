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
  __name: "sport-wetten",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sport wetten"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/sport-wetten.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Sportwetten.de </h3><p class="supage-content__fBox__tBox__p f-600"> Sportwetten.de positioniert sich im Online-Wettmarkt als ein herausragender Anbieter, der besonders durch seine Wettoptionen auf europäische Spitzenligen, einen kompetenten Kundenservice und eine benutzerfreundliche Sportwetten App punktet. Die Plattform untermauert ihre Seriosität und Sicherheit mit einer deutschen Lizenzierung durch das Regierungspräsidium Darmstadt und Partnerschaften mit renommierten Vereinen. Ein attraktiver Neukundenbonus von 100% bis zu 100€, der 6x mit Sportwetten umgesetzt werden muss, spricht ebenso für Sportwetten.de. </p><p class="supage-content__fBox__tBox__p"> Im Kernangebot besticht Sportwetten.de durch ein umfangreiches Wettprogramm, das über 30 Sportarten umfasst, wobei nach der Einführung deutscher Lizenzbestimmungen eine Reduzierung auf unter 20 Sportarten erfolgte. Fußballwetten nehmen eine zentrale Rolle ein, mit einer breiten Palette an Wettoptionen für die europäischen Top-Ligen sowie internationale Wettbewerbe. Dabei bieten die Quoten im Bereich des europäischen Top-Fußballs und bei anderen populären Sportarten wie Tennis, Basketball und Eishockey ein faires und konkurrenzfähiges Niveau. Die Live-Wetten-Plattform von Sportwetten.de wird als solide und ausreichend beschrieben, obwohl hier das Angebot im Vergleich zum Pre-Match-Bereich etwas schmaler ausfällt. Eine native App für iOS und Android sowie eine browserbasierte mobile Version ermöglichen Zugriff auf das gesamte Wettprogramm und sämtliche Funktionen der Plattform, was die Flexibilität und Nutzerfreundlichkeit unterstreicht. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" href="/">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sport-wetten.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sport-wetten-w0hA_m5a.js.map
