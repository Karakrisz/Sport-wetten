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
  __name: "spinanga",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Spinanga"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/spinanga.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Spinanga </h3><p class="supage-content__fBox__tBox__p f-600"> Spinanga kombiniert als Online-Glücksspielplattform die Aufregung von Casino-Spielen mit Sportwetten und richtet sich an Glücksspielbegeisterte weltweit. Die Plattform sticht durch eine breite Auswahl an Spielautomaten und Tischspielen sowie einen umfangreichen Bereich für Sportwetten hervor, der die Bedürfnisse und Vorlieben einer vielfältigen Nutzerbasis abdeckt. </p><p class="supage-content__fBox__tBox__p"> Nutzer können auf eine große Bandbreite an Sportarten und Ereignissen weltweit wetten, wobei Spinanga von populären Disziplinen wie Fußball, Basketball und Tennis bis hin zu Nischensportarten reicht. Besonders hervorzuheben sind die unterschiedlichen Wettarten, die individuelle Wettoptionen ermöglichen, sowie wettbewerbsfähige Quoten, die Spinanga für Wettfans attraktiv machen. </p><p class="supage-content__fBox__tBox__p"> Die Option der Live-Wetten erhöht die Dynamik und Interaktivität, indem Nutzer in Echtzeit auf Ereignisse setzen können, was den Nervenkitzel steigert. Regelmäßige Promotionen und Boni für Sportwetten bieten zusätzliche Anreize und machen Spinanga zu einer besonders ansprechenden Wahl für Wetten und Casino-Spiele. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://spng.servclick1move.com/?mid=97525_728873">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spinanga.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=spinanga-Qzel--cx.js.map
