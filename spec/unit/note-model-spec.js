(function(exports) {
  function testNoteModel() {
    function itTakesTextParameter() {
      var text = "My favourite language is JavaScript";
      var noteModel = new NoteModel(text);

      assert.isTrue(noteModel._text === text);
    }
    console.log("itTakesTextParameter");
    itTakesTextParameter();

    function itReturnsText() {
      var text = "My favourite language is not JavaScript";
      var noteModel = new NoteModel(text);

      assert.isTrue(noteModel.text() === text);
    }
    console.log("itReturnsText");
    itReturnsText();
  }

  testNoteModel();
})(this);
