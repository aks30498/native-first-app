import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
/**
 * @author
 * @function NoteItem
 **/

const NoteItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    padding: 10,
    borderWidth: 1,
    marginVertical: 10
  }
});

export default NoteItem;
