import DontDeleteReleaseBranch from './plugins/dont-delete-release-branch';
import DontMerge from './plugins/dont-merge';
import Trello from './plugins/trello';

const plugins = {
  DontDeleteReleaseBranch,
  DontMerge,
  Trello
};

class Plugin {
  constructor(page, setting) {
    for (var p of setting.plugins) {
      const klass = plugins[p.name];
      const options = p.options || {};
      if (!klass) {
        continue;
      }
      new klass(page, options);
    }
  }
}

export default Plugin;
