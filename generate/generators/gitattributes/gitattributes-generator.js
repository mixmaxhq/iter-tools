const gitattributesFile = require('../_templates/gitattributes-file');

const Generator = require('../../generator');

class GitattributesGenerator extends Generator {
  constructor(options) {
    super(options);
    this.ignored = ['**'];
  }

  afterPathsChanged() {
    this.generatedPaths.add('.gitattributes');
    this.generatedPaths.add('src/index.js');
    this.generatedPaths.add('src/index.d.ts');

    this.writeMonolithic('.gitattributes', gitattributesFile(this.generatedPaths));
  }
}

module.exports = GitattributesGenerator;
