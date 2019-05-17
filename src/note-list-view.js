(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.listHTML = function() {
    if (this._noteList.all().length === 0) {
      return "";
    }
    var textArray = this._noteList.all().map(function(note) {
      return note.text();
    });
    var textHTML = [
      "<ul><li><div>",
      textArray.join("</div></li><li><div>"),
      "</div></li></ul>"
    ].join("");
    return textHTML;
  };

  exports.NoteListView = NoteListView;
})(this);
