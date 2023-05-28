const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`Generating Env for ${NODE_ENV}`);

function buildEnvironmentFile() {
  return Object.keys(process.env)
    .filter((key) => key.startsWith('REACT_APP_'))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {});
}

function resolvefile(file) {
  const path = fs.realpathSync(process.cwd());
  return `${path}/${file}`;
}

function overrideEnvWithPipelineEnv() {
  [resolvefile(`.env.${NODE_ENV}`), resolvefile('.env')].forEach(
    (dotEnvFilePath) => {
      if (fs.existsSync(dotEnvFilePath)) {
        const dotenv = require('dotenv');
        const dotenvExpand = require('dotenv-expand');

        // Load environment variables from given .env file
        const result = dotenv.config({
          path: dotEnvFilePath,
        });

        dotenvExpand.expand(result);
      }
    }
  );
}

function createFile(content) {
  const defaultFilePath = path.resolve('./public');
  const customFilepath = args?.target;
  fs.writeFileSync(`${customFilepath || defaultFilePath}/env.js`, content);
  console.log(
    `EnvFile ${customFilepath || defaultFilePath} created successfully.`
  );
}

// Execution point.
overrideEnvWithPipelineEnv();
const env = buildEnvironmentFile();
const fileContents = `window._env_ = ${JSON.stringify(env)};`;
createFile(fileContents);
