const fs = require('fs');

const myArgs = process.argv.slice(2);

const getFiles = (currentPath = __dirname) => {
  const files = fs.readdirSync(currentPath);

  const filter = new RegExp(myArgs);

  files.map((file) => {
    const currentFile = `${currentPath}/${file}`;
    const stats = fs.statSync(currentFile);

    if (stats.isFile() && filter.test(file)) {
      console.log(currentFile);
    } else if (stats.isDirectory()) {
      getFiles(currentFile);
    }
    return currentFile;
  });
};

getFiles();
