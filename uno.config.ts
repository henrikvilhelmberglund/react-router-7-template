import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno({ dark: "media" })],
  theme: {
    fontFamily: {
      sans: '"Inter", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
});
