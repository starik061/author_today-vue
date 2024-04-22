import ru from "@vueform/vueform/locales/ru";
import vueform from "@vueform/vueform/dist/vueform";
import { defineConfig } from "@vueform/vueform";

// You might place these anywhere else in your project
import "@vueform/vueform/dist/vueform.css";

export default defineConfig({
  theme: vueform,
  locales: { ru },
  locale: "ru",
  classHelpers: true,
  floatPlaceholders: false
});
