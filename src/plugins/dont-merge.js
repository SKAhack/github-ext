import $ from 'jQuery';

const defaultWords = [ 'WIP' ];

class DontMerge {
  constructor(page, options = {}) {
    if (page.name !== 'PullRequest') {
      return;
    }
    this.page = page;
    const words = options.words || defaultWords;

    this.update(words);
  }

  update(words) {
    const regex = new RegExp(`\\[(${words.join('|')})\\]`);
    if (regex.test(this.page.title)) {
      this.page.disableMergeButton();
    }
  }
}

export default DontMerge;
