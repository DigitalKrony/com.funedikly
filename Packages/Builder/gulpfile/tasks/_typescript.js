import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';
import ts from 'typescript';

const env = dotenv.config().parsed;

const devOptions = {
  noEmit: false,
  removeComments: false
};

const loud = env.RUN_LOUD || false;

const readConfigFile = (filePath) => {
  const tsConfig = ts.readConfigFile(filePath, ts.sys.readFile);

  const parsedConfig = ts.parseJsonConfigFileContent(
    tsConfig.config,
    ts.sys,
    process.cwd(), // base path for relative paths in tsconfig
    tsConfig, // compiler options
    filePath // path to tsconfig.json
  );

  return parsedConfig;
}

const typescript = (gulp) => {
  gulp.task('typescript', (callback) => {
    const { typescript } = gulp.config;
    const buildDirectory = env.BUILD_DIR || 'dest';

    if (!!typescript) {
      console.log('Compiling TypeScript...');

      Object.keys(typescript).forEach((key) => {
        const tsConfigPath = typescript[key].tsconfig;
        const tsConfig = readConfigFile(tsConfigPath);

        if (tsConfig.errors.length > 0) {
          console.error(`Errors in tsconfig for ${key}:`, parsedConfig.errors);
          callback(new Error(`TypeScript compilation failed for ${key}`));
          return;
        }

        ts.createProgram(
          tsConfig.fileNames,
          { ...tsConfig.options, ...devOptions }
        ).emit(undefined, (fileName, data) => {
          const outputPath = path.join(buildDirectory, path.relative(process.cwd(), fileName));
          const outputDir = path.dirname(outputPath);

          // Ensure the output directory exists
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          // Write the emitted file
          fs.writeFileSync(outputPath, data);

          loud && console.log(`Compiled ${fileName} to ${outputPath}`);
        });

      });
    } else {
      console.log('No TypeScript files to compile.');
    }

    callback();
  });
};

export default typescript;
