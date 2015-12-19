import $ from 'jQuery';
import NodeTrello from "node-trello";

const renderTemplate = (card) => {
  return `
  <div class="discussion-item discussion-item-ref">
    <div class="discussion-item-header">
      <span class="discussion-item-icon">
        <span class="octicon octicon-bookmark"></span>
      </span>

      <img alt="trello" class="avatar" height="16" src="https://avatars1.githubusercontent.com/u/6181431?v=3&amp;s=32" width="16">
    </div>

    <span class="state ${card.closed ? 'state-closed' : 'state-open'} right">
      <span class="octicon octicon-issue-opened"></span>
      ${card.closed ? 'Closed' : 'Open'}
    </span>

    <h3 class="discussion-item-ref-title">
      <a href="${card.url}" class="title-link" target="_blank">
        ${card.name}
      </a>
    </h3>
  </div>
  `;
};


class Trello {
  constructor(page, options = {}) {
    if (page.name !== 'Issue') return;
    if (!options.key || !options.token) return;

    this.page = page;
    this.options = options;
    this.trello = new NodeTrello(options.key, options.token);

    this.update();
  }

  update() {
    const q = {
      query: `\\#${this.page.issueNumber} label:${this.options.label || ''}`,
      idOrganizations: this.options.orgId,
      idBoards: this.options.boardId,
      modelTypes: "cards"
    };

    this.trello.get("/1/search", q, function(err, res) {
      if (err) throw err;
      if (res.cards.length === 0) return;

      const card = res.cards[0];
      $('.discussion-timeline .timeline-comment-wrapper')
        .eq(0)
        .after(renderTemplate(card));
    });
  }
}

export default Trello;
