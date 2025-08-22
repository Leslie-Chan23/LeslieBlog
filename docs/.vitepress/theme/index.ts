import Teek, { artalkContext, giscusContext, walineContext } from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import { defineComponent, h, provide } from "vue";
import { useData, useRoute } from "vitepress";
import Giscus from "@giscus/vue";

export default {
  extends: Teek,
  Layout: defineComponent({
    name: "LayoutProvider",
    setup() {
      const { isDark, page } = useData();
      const route = useRoute();
      provide(giscusContext, () => Giscus);

      return () => h(Teek.Layout, null, {});
    },
  }),
};