import init from 'github-ext-core';
import DontDeleteReleaseBranch from './plugins/dont-delete-release-branch';
import DontMerge from './plugins/dont-merge';
import Trello from './plugins/trello';
import RelatedPullRequest from './plugins/related-pull-request';

const url = 'https://gist.githubusercontent.com/SKAhack/bc9b3d25a3618d09132a/raw/setting.json';
const plugins = {
  DontDeleteReleaseBranch,
  DontMerge,
  Trello,
  RelatedPullRequest
};

init(window, url, plugins);
