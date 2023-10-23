const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

const devDependencies = packageJson.devDependencies;
const peerDependencies = packageJson.peerDependencies;

for (const dep in peerDependencies) {
  if (devDependencies[dep]) {
    peerDependencies[dep] = devDependencies[dep];
  }
}

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
