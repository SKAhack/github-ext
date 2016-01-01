import init from 'github-ext-core';
import DontDeleteReleaseBranch from './plugins/dont-delete-release-branch';
import DontMerge from './plugins/dont-merge';
import Trello from './plugins/trello';
import RelatedPullRequest from './plugins/related-pull-request';

const plugins = {
  DontDeleteReleaseBranch,
  DontMerge,
  Trello,
  RelatedPullRequest
};

chrome.storage.sync.get({
  userSetting: '{}'
}, function(items){
  let setting = JSON.parse(items.userSetting);
  init(window, plugins, setting);
});
