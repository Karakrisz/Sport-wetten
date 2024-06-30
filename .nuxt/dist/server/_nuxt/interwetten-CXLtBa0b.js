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
  __name: "interwetten",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Interwetten"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/interwetten.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Interwetten </h3><p class="supage-content__fBox__tBox__p f-600"> Interwetten, ein Buchmacher mit mehr als 30 Jahren Erfahrung und über 1,2 Millionen Kunden, hat sich durch seine Zuverlässigkeit und den Erhalt der deutschen Wettlizenz als seriöse Plattform etabliert. Im Bereich Sportwetten zeichnet sich Interwetten durch ein vielfältiges Angebot aus, mit über 30 Sportarten und einer besonderen Tiefe im deutschen Fußball, ergänzt durch mehr als 50 internationale Ligen. Das Live-Wetten Angebot ist umfangreich, besonders an Wochenenden, mit mehr als 400 Events und einem durchschnittlichen Quotenschlüssel von 92%, was es trotz starker Konkurrenz zu einem attraktiven Angebot macht. </p><p class="supage-content__fBox__tBox__p"> Interwetten begrüßt Neukunden mit einem 100% Wettbonus bis zu 100€, wobei der Bonus in 5 Schritten freigespielt wird, indem der Einzahlungsbetrag 5x mit einer Mindestquote von 1,70 umgesetzt wird – alles innerhalb von 14 Tagen. Diese Konditionen, zusammen mit der Möglichkeit, regelmäßig Gutscheine für Freebets zu erhalten, machen Interwetten zu einer ansprechenden Wahl für Wettbegeisterte. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://affiliates.interwetten.com/affiliates/Account/Login#">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/interwetten.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=interwetten-CXLtBa0b.js.map
