import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

/**
 * @author
 * @function NoteInput
 **/

const NoteInput = props => {
  const noteInputHandler = enteredText => {
    setEnteredNote(enteredText);
  };

  const addHandler = enteredNote => {
    props.addNoteHandler(enteredNote);
    setEnteredNote("");
  };

  const [enteredNote, setEnteredNote] = useState("");
  return (
    <Modal visible={props.addNoteModal}>
      <View style={styles.addNote}>
        <TextInput
          style={styles.input}
          onChangeText={noteInputHandler}
          placeholder="Create Note"
          value={enteredNote}
        />
        <View style={styles.modalButtons}>
          <View style={styles.buttons}>
            <Button
              style={styles.addButton}
              onPress={() => addHandler(enteredNote)}
              title="Add"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              color="red"
              onPress={() => props.closeModal()}
              title="Cancel"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 5,
    marginBottom: 20
  },
  addNote: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%"
  },
  buttons: {
    width: "40%"
  }
});

export default NoteInput;
