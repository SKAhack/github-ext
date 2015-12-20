import $ from 'jQuery';

class RelatedPullRequest {
  constructor(page, options = {}) {
    if (page.name !== 'Issue') {
      return;
    }
    this.page = page;
    this.update();
  }

  update() {
    $('.discussion-item-ref').each((index, elm) => {
      const id = $(elm).find('.discussion-item-header').attr('id');
      if (/pullrequest/.test(id)) {
        this.page.addDiscussionItem(elm);
      }
    });
  }
}

export default RelatedPullRequest;
