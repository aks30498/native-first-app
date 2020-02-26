import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import NoteItem from "./components/noteItem";
import NoteInput from "./components/noteInput";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [addNoteModal, setAddNoteModal] = useState(false);

  const addNoteHandler = enteredNote => {
    setNotes(notes => [
      ...notes,
      { id: Math.random().toString(), value: enteredNote }
    ]);
    setAddNoteModal(false);
  };

  const removeNoteItemHandler = noteItemId => {
    setNotes(notes => {
      return notes.filter(note => note.id !== noteItemId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button onPress={() => setAddNoteModal(true)} title="Add a new note" />
      <NoteInput closeModal={() => setAddNoteModal(false)} addNoteModal={addNoteModal} addNoteHandler={addNoteHandler} />
      <FlatList
        data={notes}
        renderItem={itemData => (
          <NoteItem
            onDelete={() => removeNoteItemHandler(itemData.item.id)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    width: "100%"
  }
});
