import fs from 'fs';
import { execSync } from 'child_process';

const isDev = process.argv.slice(2).includes('dev');
const robotsTag = isDev
  ? '<meta name="robots" content="noindex">'
  : '';

const indexPath = './dist/index.html';

try {
  console.log(`Iniciando build...`);
  execSync(`vite build ${!isDev? '&& rm dist/robots.txt' : ''}`, { stdio: 'inherit' });
  
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  const updatedContent = 
  indexContent.replace('%REACT_APP_ROBOTS_META%', robotsTag)
                .replace('%ENV%', isDev ? 'DEV - ' : '');
  fs.writeFileSync(indexPath, updatedContent, 'utf8');
} catch (error) {
  console.error('Build failed:', error);
}