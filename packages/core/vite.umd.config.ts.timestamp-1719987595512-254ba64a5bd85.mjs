// vite.umd.config.ts
import { defineConfig } from "file:///D:/practice/bst-element/node_modules/.pnpm/vite@5.3.2_@types+node@20.14.9/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/practice/bst-element/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.2_@types+node@20.14.9__vue@3.4.31_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_umd_config_default = defineConfig({
  plugins: [
    vue()
  ],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: "./index.ts",
      name: "BstElement",
      fileName: "index",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetsFile) => {
          if (assetsFile.name === "style.css") return "index.css";
          return assetsFile.name;
        }
      }
    }
  }
});
export {
  vite_umd_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS51bWQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJhY3RpY2VcXFxcYnN0LWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJhY3RpY2VcXFxcYnN0LWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLnVtZC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3ByYWN0aWNlL2JzdC1lbGVtZW50L3BhY2thZ2VzL2NvcmUvdml0ZS51bWQuY29uZmlnLnRzXCI7XHVGRUZGaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCAgdnVlICBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHZ1ZSgpXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6IFwiZGlzdC91bWRcIixcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6ICcuL2luZGV4LnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JzdEVsZW1lbnQnLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgZm9ybWF0czogWyd1bWQnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0c0ZpbGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldHNGaWxlLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ2luZGV4LmNzcydcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRzRmlsZS5uYW1lIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixPQUFRLFNBQVU7QUFFbEIsSUFBTywwQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDbkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1Q7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGVBQW9CO0FBQ2pDLGNBQUksV0FBVyxTQUFTLFlBQWEsUUFBTztBQUM1QyxpQkFBTyxXQUFXO0FBQUEsUUFDdEI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
