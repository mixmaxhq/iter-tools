const Generator = require('../../generator');
const indexJsFile = require('../_templates/index-js-file');

const { REMOVE } = Generator;

class IndexJsGenerator extends Generator {
  constructor(options) {
    super(options);

    this.glob = ['src/methods/*/[^$]*.js'];
    this.ignored = ['src/methods/*_/**'];

    this.methods = new Set();
  }

  recordOperation(path, operation) {
    if (operation === REMOVE) {
      this.methods.delete(path);
    } else {
      this.methods.add(path);
    }
  }

  afterPathsChanged() {
    const destPath = 'src/index.js';
    this.writeMonolithic(destPath, indexJsFile(this.methods, destPath));
  }
}

module.exports = IndexJsGenerator;
