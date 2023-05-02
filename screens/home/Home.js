import { Button,View, Text } from "react-native"

const Home = ({navigation})=>{
    return(
    <View style={{ flex: 1 , justifyContent:"center", alignItems: 'center' }}>
      <Text>News and Events</Text>
      {/* <Button title='Go to setting' onPress={()=>navigation.navigate('Settings', {name: 'Jane'})}/> */}
    </View>)
}



export default Home