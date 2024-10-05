import fs from 'fs';
import path from 'path';

function generateFileTree(dir, fileTree = {}) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      fileTree[file] = {};
      generateFileTree(filePath, fileTree[file]);
    } else {
      fileTree[file] = 'file';
    }
  });

  return fileTree;
}

const srcDir = path.join(process.cwd(), 'src'); // Certifique-se de que o caminho está correto
const fileTree = generateFileTree(srcDir);

fs.writeFileSync('fileTree.json', JSON.stringify(fileTree, null, 2));
console.log('File tree generated in fileTree.json');
