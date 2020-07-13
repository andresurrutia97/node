const fs = require("fs");

const myArgs = process.argv.slice(2);

const getFiles = (currentPath = __dirname) => {
  const files = fs.readdirSync(currentPath);
  const filter = new RegExp(myArgs)
  files.map((el) => {
    const currentFile = `${currentPath}/${el}`;
    const stats = fs.statSync(currentFile);

    if (stats.isFile() && filter.test(el)) {
      console.log(currentFile);
    } else if (stats.isDirectory()) {
      getFiles(currentFile);
    }
  });
};