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
  __name: "bet365",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bet365"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/bet365.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> Bet365 </h3><p class="supage-content__fBox__tBox__p f-600"> Bet365.de, ein führendes Unternehmen im Bereich der Online-Sportwetten, hält seit dem 1. Juli 2021 eine deutsche Lizenz zur Vermittlung von Sportwetten, die zum 1. Januar 2024 erneuert wurde, was ihre Seriosität und Zuverlässigkeit unterstreicht. Mit einem umfangreichen Angebot, das mehr als 30 Sportarten umfasst, hebt sich Bet365 besonders durch sein vielseitiges Wettprogramm hervor. Trotz der Einschränkungen durch den neuen Glücksspielstaatsvertrag, der eSports und virtuelle Sportarten ausschließt, bleibt das Angebot an Wetten, insbesondere im Fußballbereich, beeindruckend. Kunden können auf Spiele der europäischen Topligen sowie auf Begegnungen aus anderen Teilen der Welt wetten, wobei die Anzahl der Wettmöglichkeiten pro Spiel in den Top-Ligen bis zu 200 erreichen kann. </p><p class="supage-content__fBox__tBox__p"> Neben dem Fußball deckt Bet365 auch andere populäre Sportarten wie Tennis, Handball, Basketball und Eishockey ab und bietet selbst für weniger bekannte Sportarten wie Bandy oder Gälischen Sport Wettoptionen an. Der Buchmacher punktet ebenfalls mit einem attraktiven Angebot für Neukunden: Bis zu €100 in Wett-Credits, die nach der Erfüllung bestimmter Bedingungen zur Verfügung gestellt werden. Bet365 zeichnet sich zudem durch ein ausgezeichnetes Live-Wetten-Angebot aus, das fast alle Sportarten des Pre-Match-Programms umfasst und durch einen übersichtlichen Live-Wetten-Kalender ergänzt wird, was den Buchmacher zu einer Top-Adresse für Sportwettenfans macht. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://www.bet365.de/#/HO/">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bet365.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=bet365-C1gsr7sU.js.map
