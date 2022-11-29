import { Button, Text, View } from 'react-native';
const User = (props) => {
    return (
        <View style = {{
            flex:1,
            alignItems:'center',
            justifyContent:'center'}}>
                <Text>User Screen</Text>
        <Button 
            title='To Home Screen'
            onPress={()=>{
                props.navigation.navigate("Home")
            }}>
        </Button>
        </View>
    );
}
export default User;