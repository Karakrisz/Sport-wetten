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
  __name: "bwin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bwin"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/bwin.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> BWIN </h3><p class="supage-content__fBox__tBox__p f-600"> Bwin ist ein führender Online-Wettanbieter aus Österreich, der seit 1997 aktiv ist und sich durch sein umfangreiches Angebot an Sportwetten und Online-Automatenspielen auszeichnet. Mit einer deutschen Wettlizenz ausgestattet, sponsert Bwin auch namhafte Fußballteams und Wettbewerbe. Der Buchmacher hebt sich durch seine benutzerfreundliche Sportwetten App und attraktive Promotionen für Stammkunden hervor. </p><p class="supage-content__fBox__tBox__p"> Im Sportwetten-Bereich bietet Bwin neuen Spielern einen attraktiven Einzahlungsbonus, mit dem sie sich eine 100 € Jokerwette sichern können, ohne einen speziellen Bonuscode eingeben zu müssen. Die Mindesteinzahlung beträgt lediglich 10 €, und die FreeBet muss innerhalb von sieben Tagen genutzt werden. Gewinne aus der Jokerwette werden als Nettogewinn dem Konto gutgeschrieben, während im Falle eines Verlusts der Einsatz zurückerstattet wird. Dieses Angebot gilt sowohl in Deutschland als auch in Österreich. Zudem erhalten Spieler nach erfolgreicher Kontoverifizierung eine zusätzliche 10 € FreeBet, die an keine Mindestquote oder Umsatzbedingungen gebunden ist. Bwin stellt eine Vielzahl von Zahlungsmethoden bereit, darunter PayPal, Klarna, und Banküberweisung, wobei alle Einzahlungen gebührenfrei sind. Die Plattform gewährleistet schnelle und sichere Transaktionen, was das Wetten noch komfortabler macht. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" href="#">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bwin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=bwin-DXzEOVgO.js.map
