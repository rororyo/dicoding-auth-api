import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Specify global variables for the browser, Node.js, and Jest
  { 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,  
      },
    }
  },
  pluginJs.configs.recommended,
];
