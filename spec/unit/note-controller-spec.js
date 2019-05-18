function testNoteController() {
  function itTakesNoteListParameter() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    assert.isTrue(noteController._noteList === noteList);
  }
  console.log("itTakesNoteListParameter");
  itTakesNoteListParameter();

  function itCreatesNoteListViewWithNoteList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    assert.isTrue(noteController._noteListView._noteList === noteList);
  }
  console.log("itCreatesNoteListViewWithNoteList");
  itCreatesNoteListViewWithNoteList();

  function updatesInnerHTMLAppElement() {
    var appElementDouble = {};

    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    noteController.updateInnerHTML(appElementDouble);

    var html = "<ul><li><div>Favourite food: pesto</div></li></ul>";

    assert.isTrue(appElementDouble.innerHTML === html);
  }
  console.log("updatesInnerHTMLAppElement");
  updatesInnerHTMLAppElement();
}
console.warn("testNoteController");
testNoteController();
