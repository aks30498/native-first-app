import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

/**
 * @author
 * @function NoteInput
 **/

const NoteInput = props => {
  const noteInputHandler = enteredText => {
    setEnteredNote(enteredText);
  };

  const [enteredNote, setEnteredNote] = useState("");
  return (
    <View style={styles.addNote}>
      <TextInput
        style={styles.input}
        onChangeText={noteInputHandler}
        placeholder="Create Note"
        value={enteredNote}
      />
      <Button onPress={() => props.addNoteHandler(enteredNote)} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    flex: 1,
    padding: 5,
    marginRight: 10
  },
  addNote: {
    flexDirection: "row"
  }
});

export default NoteInput;
