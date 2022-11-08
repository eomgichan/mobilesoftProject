import { Text, View, Button } from 'react-native';

const Home = (props) => {
    return (
        <View style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text>Home Screen</Text>
        <Button 
            title='To User Screen'
            onPress={()=>{
                props.navigation.navigate("User",
                {
                    userIdx:100,
                    userName:"Gichan",
                    userLastName:'Eom'
                })
            }}
        />
        <Button
            title = "Change the TItle"
            onPress={() =>
                props.navigation.setOptions({
                    title:'Changed!',
                    headerStyle:{
                      backgroundColor:'pink'
                    },
                    headerTintColor:'red'
                })
            }   
        ></Button>
        </View>
    );
}

export default Home;