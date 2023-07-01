import { View, Text, StyleSheet, Dimensions } from "react-native";
import { color } from "../../utilities/Colors";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: width * 0.98,
          marginLeft: 0.01 * width,
        }}
      >
        <View
          style={{
            marginVertical: 14,
            borderWidth: 0.5,
            borderRadius: 5,
            padding: width * 0.05,
            shadowColor: color.primary,
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: color.blueOcean,
              backgroundColor: color.keyllyGreen,
              paddingVertical: 15,
              borderRadius: 3,
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            WELCOME TO NDMC
          </Text>
          <Text>.. CENTRALLY ARCHIVING HEALTH AND HEALTH RELATED DATA</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AboutPage;
