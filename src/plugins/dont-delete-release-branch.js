import $ from 'jQuery';

class DontDeleteReleaseBranch {
  constructor(page) {
    if (page.name !== 'PullRequest') {
      return;
    }
    this.page = page;

    this.init();
  }

  init() {
    const branchName = this.page.currentBranchName;
    if (branchName === 'release') {
      this.page.disableDeleteButton();
    }
  }
}

export default DontDeleteReleaseBranch;
