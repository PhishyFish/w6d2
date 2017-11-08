class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.$el.append(this.setupBoard());
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", e => {
      const $li = $(e.currentTarget);
      this.makeMove($li);
    });
  }

  makeMove($square) {
    if ($square.hasClass("selected")) {
      alert("Invalid move!");
    } else {
      this.game.playMove($square.data("pos"));
      $square.text(this.game.currentPlayer);
      $square.addClass("selected");
      $square.addClass(this.game.currentPlayer);
    }

    if (this.game.isOver()) {
      $(`.${this.game.currentPlayer}`).addClass("winner");
      $("li").not(".winner").addClass("loser");
      $("body").append("<h2>You won!</h2>");
      $("li").removeClass("unselected");
      $("li").off("click");
    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        let $li = $("<li></li>");
        $li.data( {pos: [row, col]} );
        $li.addClass("unselected");
        $ul.append($li);
      }
    }

    return $ul;
  }
}

module.exports = View;
