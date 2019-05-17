(function(exports) {
  function testNoteModel() {
    console.warn("testNoteModel");

    function itTakesTextParameter() {
      var text = "My favourite language is JavaScript";
      var note = new Note(text);

      assert.isTrue(note._text === text);
    }
    console.log("itTakesTextParameter");
    itTakesTextParameter();

    function itReturnsText() {
      var text = "My favourite language is not JavaScript";
      var note = new Note(text);

      assert.isTrue(note.text() === text);
    }
    console.log("itReturnsText");
    itReturnsText();
  }

  testNoteModel();
})(this);
