import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

const TagItem = ({title, id, type, select, setSelect, copyArray, text, setText, onCreateTag}) => {

  return (
    <View>
      {type === "default" ? (
        <TouchableOpacity
          onPress={() => {
            copyArray[id-1] = !copyArray[id-1]
            setSelect(copyArray)
            }
          }
          
          style={[
            styles.tag, 
            {backgroundColor: (select[id-1]==true) ? 'yellow':'white'}
        ]}at
        >
          <Text style={[styles.tagText, styles.defaultTag]}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={[styles.addingTag]}
          placeholder="태그 추가"
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
      )}
    </View>
  );
};
TagItem.defaultProps = {
    type: 'default',
};

const styles = StyleSheet.create({
  tagText: {
    fontSize: 14,
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  defaultTag: {
    borderColor: "orange",
  },
  addingTag: {
    opacity: 0.8,
    fontSize: 14,
    borderWidth: 1,
    margin: 5,
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'gray',
    color: 'black',
    borderColor: "purple",
  },
  selected: {
    backgroundColor: 'yellow'
  },
  
});

export default TagItem;
