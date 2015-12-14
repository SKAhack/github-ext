import $ from 'jQuery';

const pathRegex = /[\/](.*?)\/(.*?)\/pull\/(\d+)/;

class PullRequest {
  constructor() {
    const path = window.location.pathname;
    const matches = pathRegex.exec(path);

    this.pageObj = {
      org: matches[1],
      repo: matches[2],
      number: matches[3]
    };

    this.init();
  }

  init() {
    $('.sidebar-milestone').hide();
  }
}

PullRequest.detect = function(path) {
  return pathRegex.test(path);
};

export default PullRequest;

