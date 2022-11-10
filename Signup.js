import { View, TextInput, Text, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from 'firebase/firestore';
import React, { useState } from 'react';
const Signup = () => {
    const [addName, setAddName] = useState("");
    const [addAge, setAddAge] = useState("");
    const [id, setID] = useState('');
    const [users, setUsers]  = useState();
    const deletefromDB = async () => {
        try{
            const docRef = doc(db, "user", id);
            await deleteDoc(docRef);
            alert("Deleted!!")
            readfromDB()
        }catch(error){
            console.log(error.message)
        }
    }
    const updateDB = async () => {
        try{
            const docRef = doc(db, "user", id);
            await updateDoc(docRef, {
                addName: addName,
                addAge: addAge
            });
            alert("Updated!!")
            readfromDB()
        }catch(error){
            console.log(error.message)
        }
    }
    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "user"))
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      }catch(error){
            console.log(error.message)
        }
    }  
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
        <Button title="Read Text" onPress={readfromDB}/>
        {users?.map((row,idx) => {
            return (
                <>
                    <Text>User- {idx}</Text>
                    <Text>{row.id}</Text>
                    <Text>{row.addName}</Text>
                    <Text>{row.addAge}</Text>
                </>
            );
        })}
        <Button title="Update Text" onPress={updateDB} />
        <TextInput 
            placeholder = "Updata ID"
            value = {id}
            onChangeText = {setID}>
        </TextInput>
        <TextInput 
            placeholder = "name"
            value = {addName}
            onChangeText = {setAddName}>
        </TextInput>
        <TextInput 
            placeholder = "Age"
            value = {addAge}
            onChangeText = {setAddAge}>
        </TextInput>
        <Button title="Delete Text" onPress={deletefromDB} />
        <TextInput
            placeholder = "Delete ID"
            value = {id}
            onChangeText = {setID}
        />
    </View>
    );
}

export default Signup;