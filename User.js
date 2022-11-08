import { Text, View, Button } from 'react-native';

const User = (props) => {
    const {params} = props.route
    const userIdx = params? params.userIdx:null;
    const userName = params? params.userName:null;
    const userLastName = params? params.userLastName:null;
    return (
        <View style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'}}>
            <Text>User Screen</Text>
        <Button 
            title='To Home Screen'
            onPress={()=>{
                props.navigation.navigate("Home")
            }}
        />
        <Text>User Idx: {JSON.stringify(userIdx)}</Text>
        <Text>User name: {JSON.stringify(userName)}</Text>
        <Text>User Last name: {JSON.stringify(userLastName)}</Text>
        </View>
    );
}

export default User;