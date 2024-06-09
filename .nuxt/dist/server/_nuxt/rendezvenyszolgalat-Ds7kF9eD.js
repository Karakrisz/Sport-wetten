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
import "destr";
const _sfc_main = {
  __name: "rendezvenyszolgalat",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Rendezvényszolgálat"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subpage-content subpage-two-services-content subpage-services-content--bg-color" }, _attrs))}><div class="subpage-services__img-text-box bg-color-w d-flex"><div class="subpage-services__img-text-box__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "subpage-services__img-text-box__img-box__img",
        src: "/img/subpage-services/rendezveny_biztositas.svg",
        alt: "Biztos Alkuszom"
      }, null, _parent));
      _push(`</div><div class="subpage-services__img-text-box__text-box"><h4 class="subpage-services__img-text-box__text-box__h4 f-700"> Rendezvényszolgálat </h4><p class="subpage-services__img-text-box__text-box__p"> A rendezvénybiztosítás kulcsfontosságú az események sikeres és zavartalan lebonyolításához. Biztosításaink magukban foglalják a felelősségbiztosítást, a rendezvény helyszínének védelmét, valamint az egyedi igényekhez igazodó kockázatkezelést, biztosítva ezzel a rendezvény zavartalan lebonyolítását. </p><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Miért fontos a rendezvénybiztosítás? </h5><ul class="subpage-services__img-text-box__text-box__ul"><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Kockázatcsökkentés:</strong> Csökkenti a váratlan események pénzügyi kockázatait, mint például balesetek, időjárás okozta károk vagy a helyszín rongálódása. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Jogi védelem:</strong> Felelősségbiztosításunk segít megvédeni Önt a harmadik felekkel szembeni pótfelelősségtől </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Nyugalom:</strong> Tudhatja, hogy minden lehetséges probléma esetén van fedezete, így Ön teljes mértékben az esemény szervezésére koncentrálhat. </li></ul><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Milyen szolgáltatásokat kínál a rendezvénybiztosításunk? </h5><ul class="subpage-services__img-text-box__text-box__ul"><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Felelősségbiztosítás: </h6><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Személyi sérülések:</strong> Fedezetet biztosítunk, ha a rendezvényen résztvevő személyek balesetet szenvednek. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Tulajdon károsodása:</strong> Kártérítést nyújtunk, ha a rendezvény során kár keletkezik a helyszínen vagy az ott található tárgyakban. </li><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Helyszín védelme: </h6><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Biztosítás a helyszínre:</strong> Kiterjedt védelem a fizikai károk ellen, beleértve tüzet, vihart és egyébet, ami a helyszínt érintheti. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Eszközök biztosítása:</strong> Védelmet nyújtunk azokra az eszközökre, amelyek az eseményhez szükségesek, mint például hangtechnika, világítás stb. </li><h6 class="subpage-services__img-text-box__text-box__ul__h6 f-700"> Egyedi kockázatkezelés: </h6><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Személyre szabott megoldások:</strong> Minden egyes rendezvény egyedi igényeit figyelembe véve dolgozunk ki biztosítási terveket. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Proaktív kockázatértékelés</strong> Szakértőink segítenek azonosítani és kezelni a potenciális kockázatokat a rendezvény előtt. </li></ul><h5 class="subpage-services__img-text-box__text-box__h5 f-700"> Hogyan működik a rendezvénybiztosítás igénylése? </h5><ul class="subpage-services__img-text-box__text-box__ul"><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Konzultáció:</strong> Megbeszéljük Önnel a rendezvény részleteit és kockázati tényezőit. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Személyre szabott biztosítási terv:</strong> Elkészítjük a rendezvényre szabott biztosítási tervet. </li><li class="subpage-services__img-text-box__text-box__ul__li"><strong class="text-color f-600">Szerződéskötés:</strong> Egyszerű folyamat, amely gyorsan és hatékonyan biztosít védelmet. </li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rendezvenyszolgalat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=rendezvenyszolgalat-Ds7kF9eD.js.map
