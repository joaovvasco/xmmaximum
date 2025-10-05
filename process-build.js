import fs from 'fs';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const env = args !== null && args.length > 0? args[0] : '';  
console.log(env)
const robotsTag = env === 'dev'
  ? '<meta name="robots" content="noindex">'
  : '';
console.log(robotsTag)
const indexPath = './dist/index.html';

try {
  console.log(`Iniciando build...`);

  let command = `vite`;

  if(env !== 'local')
    command += ` build ${env == 'prod'? '&& rm dist/robots.txt' : '&& rm dist/sitemap.xml'}`;

  execSync(command, { stdio: 'inherit' });
  
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  const updatedContent = 
  indexContent.replace('%REACT_APP_ROBOTS_META%', robotsTag)
                .replace('%ENV%', env === 'dev' ? 'DEV - ' : '');
  fs.writeFileSync(indexPath, updatedContent, 'utf8');
} catch (error) {
  console.error('Build failed:', error);
}