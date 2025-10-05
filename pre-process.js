import fs from 'fs';
import { execSync } from 'child_process';


// 1. Defina o que será injetado
// Verifica o argumento passado: se for 'block', injeta a tag. Se for 'allow', injeta uma string vazia.
const isDev = process.argv.slice(2).includes('dev');
const robotsTag = isDev
  ? '<meta name="robots" content="noindex">'
  : '';

// 2. Define o caminho do index.html
const indexPath = './dist/index.html';


try {
  // 5. Roda o comando de build do React
  console.log(`Iniciando build...`);
  execSync(`vite build ${!isDev? '&& rm dist/robots.txt' : ''}`, { stdio: 'inherit' });
  
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // 3. Executa a substituição
  const updatedContent = indexContent.replace('%REACT_APP_ROBOTS_META%', robotsTag).replace('%ENV%', isDev ? 'DEV - ' : '');

  // 4. Salva o arquivo temporariamente ou de volta no public/index.html
  fs.writeFileSync(indexPath, updatedContent, 'utf8');

} catch (error) {
  console.error('Build failed:', error);
} finally {
  // 6. Restaura o arquivo index.html original APÓS o build
  // (Isso é crucial para que o Git não detecte mudanças e o próximo build seja limpo)
  // fs.writeFileSync(indexPath, indexContent, 'utf8');
}