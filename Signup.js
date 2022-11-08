import { View, TextInput, Text, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
const Signup = () => {
    const [addName, setAddName] = useState("")
    const [addAge, setAddAge] = useState("")
    const addtoDB = async() => {
        await addDoc(collection(db, "user"),{
            addName:addName,
            addAge:addAge,
            createdAt: new Date()
        })
        alert("Added")
        setAddAge("")
        setAddName("")
    }
    return ( <View>
        <TextInput 
            placeholder = "Name"
            value = {addName}
            onChangeText = {setAddName}>
        </TextInput>
        <TextInput 
            placeholder = "Age"
            value = {addAge}
            onChangeText = {setAddAge}>
        </TextInput>
        <Button title="Add Text" onPress={addtoDB}/>
    </View>);
}

export default Signup;