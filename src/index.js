import injection from 'github-injection';
import State from './state';
import Plugin from './plugin';

const state = new State();
const url = 'https://gist.githubusercontent.com/SKAhack/bc9b3d25a3618d09132a/raw/07cf45b55b453469c46c8780c0f174261b4af42c/setting.json';

let jsonCache;

const fetchSetting = (url, callback) => {
  if (jsonCache) {
    callback(jsonCache);
    return;
  }

  fetch(url).then(res => {
    res.json().then(json => {
      jsonCache = json;
      callback(jsonCache);
    });
  });
};

injection(window, () => {
  state.init();

  fetchSetting(url, (setting) => {
    if (state.page) {
      new Plugin(state.page, setting);
    }
  });
});
