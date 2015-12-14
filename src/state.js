import Repository from './pages/repository';
import PullRequest from './pages/pull-request';

class State {
  constructor() {
  }

  init() {
    this.state = {
      page: this.detectPage()
    };
  }

  detectPage() {
    const path = window.location.pathname;

    if (PullRequest.detect(path)) {
      return new PullRequest();
    } else if (Repository.detect(path)) {
      return new Repository();
    }

    return null;
  }
}

export default State;
