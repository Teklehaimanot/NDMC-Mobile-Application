import { View, Text, StyleSheet, Dimensions } from "react-native";
import { color } from "../../utilities/Colors";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={[styles.header, styles.boxShadow]}>
          <Text style={styles.welcomeHeader}>WELCOME TO NDMC</Text>
          <Text style={{ color: color.blueGray, fontSize: 15 }}>
            .. CENTRALLY ARCHIVING HEALTH AND HEALTH RELATED DATA
          </Text>
        </View>
      </View>
      <ScrollView style={styles.cardView}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 12,
    borderRadius: 5,
    padding: width * 0.05,
  },
  boxShadow: {
    elevation: 2,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 0.5 * 2 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 2,
  },
  welcomeHeader: {
    fontSize: 20,
    color: color.blueOcean,
    backgroundColor: color.keyllyGreen,
    paddingVertical: 15,
    borderRadius: 3,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2.5,
  },
  cardView: {
    width: width * 0.98,
    marginLeft: 0.01 * width,
  },
});
export default AboutPage;
