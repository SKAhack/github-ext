import injection from 'github-injection';
import State from './state';
import Plugin from './plugin';

const state = new State();
const plugin = new Plugin();

injection(window, () => {
  state.init();
  console.log(state);
});
