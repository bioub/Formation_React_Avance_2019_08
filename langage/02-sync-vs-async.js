const fs = require('fs');

try {
  const data = fs.readFileSync('.editorconfig');
  fs.writeFileSync('.editoconfig.copy', data);
  console.log('File copied');
}
catch (err) {
  console.log(err);
}

// pile d'appels
// ^
// |
// |
// |try {require - readFileSync - writeFileSync}
// +--------------------------------------------> temps
// Callback Hell / Pyramid of doom
fs.readFile('.editorconfig', (err, data) => {
  if (err) {
    return console.log(err)
  }
  fs.writeFile('.editoconfig.copy', data, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('File copied');
  });
});

console.log('Fin');

// pile d'appels
// ^
// |
// |                   writeFile     log
// |readFile - log ... cbR       ... cbW
// +-------------------10ms----------20ms--------------> temps
// output      Fin                   File copied

// file d'attente (10ms) : cbR
// file d'attente (11ms) : cbW

fs.promises.readFile('.editorconfig')
  .then((data) => fs.promises.writeFile())
  .then(() => console.log('File copied'))
  .catch((err) => console.log(err));


(async function () {
  try {
    const data = await fs.promises.readFile('.editorconfig');
    await fs.promises.readFile('.editoconfig.copy', data);
    console.log('File copied');
  }
  catch (err) {
    console.log(err);
  }
}());
