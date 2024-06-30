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
  __name: "tipico",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tipico"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/tipico.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Tipico </h3><p class="supage-content__fBox__tBox__p f-600"> Tipico ist ein deutscher Wettanbieter, der seit seiner Gründung im Jahr 2004 eine bedeutende Position im Bereich der Sportwetten, besonders im deutschsprachigen Raum, einnimmt. Der Wettanbieter ist bekannt für seine Partnerschaften mit großen Fußballvereinen wie Bayern München sowie für sein umfangreiches Netzwerk an stationären Wettbüros in Deutschland. Tipico operiert von Malta aus und verfügt über eine EU-Lizenz der Malta Gaming Authority, was seine Zuverlässigkeit und Sicherheit unterstreicht. </p><p class="supage-content__fBox__tBox__p"> Das Wettprogramm von Tipico zeichnet sich durch eine breite Auswahl an Sportarten aus, mit einem klaren Fokus auf Fußballwetten. Kunden haben Zugang zu einer Vielzahl von Ligen weltweit, darunter auch Nachwuchsligen und die oberen deutschen Fußballligen bis hin zur 3. Liga. Neben Fußball bietet Tipico auch bedeutende Wettmöglichkeiten für Tennis, Basketball, Eishockey, Handball und Motorsport. Eine Besonderheit ist die Tipico Cashout Option, die Spielern erlaubt, Wetten vorzeitig auszuzahlen, um Verluste zu minimieren. Im Bereich der Live-Wetten bietet Tipico ein umfangreiches Angebot, das vor allem Fußball abdeckt, unterstützt durch durchschnittliche Wettquoten von 94 Prozent. Obwohl das Live-Wetten Center und Live-Streams verbessert werden könnten, stellt Tipico eine attraktive Plattform für Sportwetten dar, die durch einfache Registrierungsprozesse und einen Willkommensbonus von bis zu 100 Euro für Neukunden ergänzt wird. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://www.tipico-affiliates.com/">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tipico.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=tipico-BNT3ffYh.js.map
