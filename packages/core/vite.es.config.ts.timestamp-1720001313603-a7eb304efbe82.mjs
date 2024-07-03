// vite.es.config.ts
import { defineConfig } from "file:///D:/practice/bst-element/node_modules/.pnpm/vite@5.3.2_@types+node@20.14.9/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/practice/bst-element/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.2_@types+node@20.14.9__vue@3.4.31_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/practice/bst-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.9_rollup@4.18.0_typescript@5.5.2_vite@5.3.2_@types+node@20.14.9_/node_modules/vite-plugin-dts/dist/index.mjs";
var COM_NAME = [
  "Button"
];
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  build: {
    outDir: "dist/es",
    lib: {
      entry: "./index.ts",
      name: "BstElement",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue"
      ],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetsFile) => {
          if (assetsFile.name === "style.css") return "index.css";
          return assetsFile.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("packages/hooks")) {
            return "hooks";
          }
          if (id.includes("packages/utils")) {
            return "utils";
          }
          for (let item of COM_NAME) {
            if (id.includes(`packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcmFjdGljZVxcXFxic3QtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcmFjdGljZVxcXFxic3QtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcmFjdGljZS9ic3QtZWxlbWVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7XHVGRUZGLypcclxuICogQERhdGU6IDIwMjQtMDctMDMgMTM6MjI6NTBcclxuICogQExhc3RFZGl0b3JzOiB4aWFvbG9uZy5zdUBic3QuYWlcclxuICogQExhc3RFZGl0VGltZTogMjAyNC0wNy0wMyAxMzo0Njo0OVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCAgdnVlICBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG4vLyBpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3Z1ZSdcclxuY29uc3QgQ09NX05BTUUgPSBbXHJcbiAgICBcIkJ1dHRvblwiXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdnVlKCksXHJcbiAgICAgICAgZHRzKHtcclxuICAgICAgICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbicsXHJcbiAgICAgICAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCJcclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgb3V0RGlyOiBcImRpc3QvZXNcIixcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6ICcuL2luZGV4LnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0JzdEVsZW1lbnQnLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgZm9ybWF0czogWydlcyddXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgICAgICAgICAndnVlJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdnVlOiAnVnVlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRzRmlsZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0c0ZpbGUubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHJldHVybiAnaW5kZXguY3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldHNGaWxlLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hbnVhbENodW5rcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdwYWNrYWdlcy9ob29rcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaG9va3MnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygncGFja2FnZXMvdXRpbHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3V0aWxzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgQ09NX05BTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKGBwYWNrYWdlcy9jb21wb25lbnRzLyR7aXRlbX1gKSkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFNQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFRLFNBQVU7QUFDbEIsT0FBTyxTQUFTO0FBRWhCLElBQU0sV0FBVztBQUFBLEVBQ2I7QUFDSjtBQUVBLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNBLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDTjtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0IsQ0FBQyxlQUFvQjtBQUNqQyxjQUFJLFdBQVcsU0FBUyxZQUFhLFFBQU87QUFDNUMsaUJBQU8sV0FBVztBQUFBLFFBQ3RCO0FBQUEsUUFDQSxhQUFhLElBQVk7QUFDckIsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGNBQUksR0FBRyxTQUFTLGdCQUFnQixHQUFHO0FBQy9CLG1CQUFPO0FBQUEsVUFDWDtBQUNBLGNBQUksR0FBRyxTQUFTLGdCQUFnQixHQUFHO0FBQy9CLG1CQUFPO0FBQUEsVUFDWDtBQUNBLG1CQUFRLFFBQVEsVUFBVTtBQUN0QixnQkFBSSxHQUFHLFNBQVMsdUJBQXVCLElBQUksRUFBRSxHQUFHO0FBQzVDLHFCQUFPO0FBQUEsWUFDWDtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBRUo7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
