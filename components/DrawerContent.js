import { View, Image, Text,DrawerIcon,TouchableOpacity,IconAntDesign,IconSimpleLineIcons,IconIonicons,StyleSheet,Dimensions} from "react-native"
import { color } from "../utilities/Colors";

const {width} = Dimensions.get("window")
const DrawerContent = ()=>{
    return(
        <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              borderBottomColor: color.border,
              borderBottomWidth: 1,
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 100 }}>
              <View style={styles.imageConatainer}>
                <Image style={styles.image} source={require("")} />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Sen_700Bold",
                    fontSize: 18,
                    marginBottom: 5,
                    marginTop: 10,
                  }}
                >
                  {/* {firstName + " " + lastName} */}
                </Text>
                <Text style={{ fontFamily: "Sen_400Regular", fontSize: 14 }}>
                  {/* @{username} */}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <DrawerIcon width={18} height={18} />
              <Text
                style={{
                  fontFamily: "Sen_400Regular",
                  fontSize: 18,
                  color: color.primary,
                  marginLeft: 5,
                }}
              >
                50
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("tabNavigator")}
            >
              <IconAntDesign
                name="filetext1"
                size={25}
                color={color.drawerChoice}
              />
              <Text style={styles.text}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("eventNavigator")}
            >
              <IconSimpleLineIcons
                name="event"
                size={25}
                color={color.drawerChoice}
              />
              <Text style={styles.text}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("roomNavigator")}
            >
              <IconAntDesign
                name="addusergroup"
                size={25}
                color={color.drawerChoice}
              />
              <Text style={styles.text}>Rooms</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("accountNavigator")}
            >
              <IconIonicons
                name="ios-person-circle-outline"
                size={30}
                color={color.drawerChoice}
              />
              <Text style={styles.text}>Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            // onPress={async () =>
            //   await removeUser().then(() => dispatch(logoutAction()))}
          >
            <Text
              style={{
                fontFamily: "Sen_400Regular",
                fontSize: 16,
                color: color.drawerChoice,
                marginRight: 10,
                marginVertical: 10,
              }}
            >
              Logout
            </Text>
            <IconAntDesign name="arrowright" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "Sen_400Regular",
                fontSize: 16,
                color: color.drawerChoice,
                marginRight: 10,
                marginVertical: 10,
              }}
            >
              Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: width,
      height: "100%",
      backgroundColor: color.white,
      justifyContent: "space-between",
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 80,
    },
    imageConatainer: {
      marginRight: 20,
      width: 80,
      height: 80,
      borderRadius: 80,
      elevation: 10,
      shadowColor: color.primary,
      backgroundColor: color.white,
      overflow: "hidden",
    },
    touchable: {
      marginHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    text: {
      fontFamily: "Sen_700Bold",
      fontSize: 18,
      marginLeft: 20,
      color: color.drawerChoice,
    },
  });

  export default DrawerContent