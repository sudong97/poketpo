import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

const TagItem = ({title, id, type, 
  tagData, setTagData,finalTagArray, setFinalTagArray,
  copyTagData, text, setText, onCreateTag}) => {
    
  //태그 클릭 감지
  const handleTagClick = (title) => {
    console.log(copyTagObject[title].select)
    // copyTagObject[title]['select'] = !copyTagObject[title]['select'];
    // console.log('copyTagObject', copyTagObject)
    // setSeason(copyTagObject);
    // setFinalTagArray(
    //   Object.keys(tagData).filter(
    //   item => tagData[title]['select'] === true
    // ))
  }


  return (
    <View>
      {type === "default" ? (
        <TouchableOpacity
          onPress={() => {
            copyTagData[id-1].select = !copyTagData[id-1].select
            setTagData(copyTagData)
            console.log('잘되네~')
            
          }}
          
          style={[
            styles.tag, 
            {backgroundColor: (tagData[id-1].select===true) ? 'yellow':'white'}
        ]}
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
