class View {
  constructor() {
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      $(".hanoi").append("<ul></ul>");
    }
    for (let i = 0; i < 3; i++) {
      $("ul").append("<li></li>");
    }
  }

  render() {

  }
}

module.exports = View;
