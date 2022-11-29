import { Button, Text, View } from 'react-native';
const Home = (props) => {
    return (
        <View style = {{
            flex:1,
            alignItems:'center',
            justifyContent:'center'}}>
                <Text>Home Screen</Text>
        <Button 
            title='To User Screen'
            onPress={()=>{
                props.navigation.navigate("User")
            }}>
        </Button>
        </View>
    );
}
export default Home;