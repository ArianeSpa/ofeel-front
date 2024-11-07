import { CracoConfig } from "@craco/types";
import path from "path";

const config: CracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

console.log("CRACO config loaded");

export default config;
