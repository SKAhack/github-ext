import $ from 'jQuery';

const defaultTemplate = '';

class PullRequestTemplate {
  constructor(page, options = {}) {
    if (page.name !== 'CreatePullRequest') {
      return;
    }
    this.page = page;
    const template = options.template || defaultTemplate;

    this.update(template);
  }

  update(template) {
    if (this.page.isAvailableForm && this.page.pullRequestBody.length === 0) {
      this.page.pullRequestBody = template;
    }
  }
}

export default PullRequestTemplate;
