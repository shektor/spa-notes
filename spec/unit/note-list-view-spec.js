function testNoteListView() {
  function itTakesNoteListParameter() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView._noteList === noteList);
  }
  console.log("itTakesNoteListParameter");
  itTakesNoteListParameter();

  function returnsHTMLNoteList() {
    function noNotesReturnsEmpty() {
      var noteList = new NoteList();
      var noteListView = new NoteListView(noteList);

      assert.isTrue(noteListView.listHTML() === "");
    }
    console.log("noNotesReturnsEmpty");
    noNotesReturnsEmpty();

    function oneNoteReturnsHTML() {
      var noteList = new NoteList();
      noteList.addNote("Favourite food: pesto");
      var noteListView = new NoteListView(noteList);

      var html = "<ul><li><div>Favourite food: pesto</div></li></ul>";

      assert.isTrue(noteListView.listHTML() === html);
    }
    console.log("oneNoteReturnsHTML");
    oneNoteReturnsHTML();

    function twoNoteReturnsHTML() {
      var noteList = new NoteList();
      noteList.addNote("Favourite food: pesto");
      noteList.addNote("Favourite drink: seltzer");
      var noteListView = new NoteListView(noteList);

      var html =
        "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>";

      assert.isTrue(noteListView.listHTML() === html);
    }
    console.log("twoNoteReturnsHTML");
    twoNoteReturnsHTML();
  }
  console.log("returnsHTMLNoteList");
  returnsHTMLNoteList();
}
console.warn("testNoteListView");
testNoteListView();
