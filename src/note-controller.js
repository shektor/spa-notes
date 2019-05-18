(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._noteList.addNote("Favourite food: pesto");
    this._noteListView = new NoteListView(this._noteList);
    this.updateInnerHTML(document.getElementById("app"));
  }

  NoteController.prototype.updateInnerHTML = function(element) {
    htmlString = this._noteListView.listHTML();
    element.innerHTML = htmlString;
  };

  exports.NoteController = NoteController;
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
})(this);
