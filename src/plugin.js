import Red from './plugins/red';

class Plugin {
  constructor() {
    this.plugins = {
      red: new Red()
    };
  }
}

export default Plugin;
