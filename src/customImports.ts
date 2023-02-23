import moduleAlias from "module-alias";
import path from "path";

/**
 * Declaring path aliases in tsconfig help typescript understanding them
 * But it doesn't affect the javascript produced
 *
 * To make it works, we use module-alias to correct imports at run time
 * It simply changes '@alias/my/import' by 'path/to/my/import' and enable to correctly use aliases
 *
 * @note '__dirname' is needed, so it is resolved into 'src' on dev mode and into 'dist' when running built code
 *
 * @example
 * // Simply import this file at the top of your code to make your imports work
 * import './customImports';
 */
moduleAlias.addAliases({
  "@root": __dirname,
  "@configs": path.join(__dirname, "configs"),
  "@controllers": path.join(__dirname, "controllers"),
  "@services": path.join(__dirname, "services"),
  "@middleware": path.join(__dirname, "middleware"),
  "@models": path.join(__dirname, "models"),
  "@utils": path.join(__dirname, "utils"),
  "@routes": path.join(__dirname, "routes"),
});
