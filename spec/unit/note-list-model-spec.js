(function(exports) {
  function testNoteListModel() {
    function returnsAllNotes() {
      var noteList = new NoteList();

      var noteX = new Note("Morgan");
      var noteY = new Note("Freeman");
      var noteArray = [noteX, noteY];

      noteList._notes.push(noteX);
      noteList._notes.push(noteY);

      assert.arraysMatch(noteList.all(), noteArray);
    }
    console.log("returnsAllNotes");
    returnsAllNotes();

    function itAddsAndStoresNotes() {
      var noteList = new NoteList();

      var noteText = "Favourite drink: seltzer";
      noteList.addNote(noteText);

      var storedNoteText = noteList.all()[0].text();

      assert.isTrue(storedNoteText === noteText);
    }
    console.log("itAddsAndStoresNotes");
    itAddsAndStoresNotes();
  }
  console.warn("testNoteListModel");
  testNoteListModel();
})(this);
