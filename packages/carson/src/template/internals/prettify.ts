import prettier from 'prettier';
import packageJsonPrettierPlugin from 'prettier-plugin-packagejson';

const NO_INFERRED_PARSER = /parser.*inferred/i;

export async function prettify(content: string, targetPath: string) {
  let prettifiedContent = content;

  try {
    let prettierOptions = await prettier.resolveConfig(targetPath, {editorconfig: true});

    prettifiedContent = await prettier.format(content, {
      ...prettierOptions,
      filepath: targetPath,
      plugins: [packageJsonPrettierPlugin],
    });
  } catch (error: unknown) {
    if (!NO_INFERRED_PARSER.test((error as Error).message)) {
      throw error;
    }
  }

  return prettifiedContent;
}
