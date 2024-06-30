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
  __name: "bankonbet",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bankonbet"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}><div class="supage-content__fBox d-flex"><div class="supage-content__fBox__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage/bankonbet.svg",
        alt: "Sport wetten",
        class: "subpage-content__fBox__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="supage-content__fBox__tBox"><h3 class="supage-content__fBox__tBox__h3 bottom-content__h6 f-600 text-transform-uppercase"> BANKONBET </h3><p class="supage-content__fBox__tBox__p f-600"> Bankonbet ist ein relativ neuer Akteur auf dem Markt der Online-Sportwetten, der seine Türen für Kunden im Jahr 2022 öffnete. Als Teil der renommierten Rabidi N.V. Gruppe, die für die Betreibung mehrerer erfolgreicher Wettplattformen bekannt ist, bietet Bankonbet eine moderne und benutzerfreundliche Plattform für Sportwettenliebhaber. Mit einer Lizenz aus Curaçao ausgestattet, zielt der Anbieter darauf ab, sichere und regulierte Wettdienstleistungen anzubieten, wobei er ein breites Spektrum an Sportarten, Wettmärkten und attraktiven Bonusangeboten für seine Nutzer bereithält. </p><p class="supage-content__fBox__tBox__p"> Fortsetzend legt Bankonbet großen Wert auf die Kundenzufriedenheit, was sich in einem umfangreichen Willkommensbonus für Neukunden, einem vielschichtigen VIP-Programm und ständig verfügbaren Promotionen für Bestandskunden widerspiegelt. Der Willkommensbonus lockt mit einer 100%igen Aufstockung der Ersteinzahlung bis zu einem Betrag von 120 Euro, unter der Bedingung einer Mindesteinzahlung von 50 Euro. Darüber hinaus fördert das VIP-Programm mit seinen verschiedenen Stufen die Loyalität der Spieler, indem es Vorteile wie höhere Cashback-Raten und persönliche Betreuung bietet. </p><p class="supage-content__fBox__tBox__p"> Das Wettangebot von Bankonbet ist breit gefächert und umfasst mehr als 35 Sportarten, von populären Disziplinen wie Fußball und Tennis bis hin zu exotischeren Sportarten, was den Anbieter zu einer attraktiven Wahl für Wettbegeisterte verschiedenster Vorlieben macht. Mit diesen Merkmalen positioniert sich Bankonbet als ein aufstrebender Favorit in der Welt der Online-Sportwetten. </p></div></div><div class="supage-content__lBox text-center"><a class="blog-content__postBox__link blog-content__postBox__link--format f-700 text-color-w" target="_blank" href="https://bnk.servclick1move.com/?mid=97525_728865">BET NOW </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bankonbet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=bankonbet-G2FnPhET.js.map
