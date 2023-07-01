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
      <ScrollView
        style={[
          styles.cardView,
          { borderWidth: 0.4, padding: 10, marginVertical: 15 },
        ]}
      >
        <View style={[styles.header, styles.boxShadow]}>
          <Text
            style={{
              fontSize: 15,
              color: color.greenGray,
              marginBottom: 10,
              fontWeight: "bold",
              borderBottomWidth: 0.5,
              textAlign: "center",
              padding: 5,
              letterSpacing: 2,
            }}
          >
            DIRECTOR'S STATEMENT
          </Text>
          <Text
            style={{ fontSize: 15, color: color.blueOcean, marginBottom: 10 }}
          >
            The National Data Management Center for Health (NDMC),
          </Text>
          <Text style={{ color: color.blueGray, lineHeight: 20 }}>
            under theEthiopian Public Health Institute (EPHI), is responsible to
            archive health related data. Distinctively, the center shoulders the
            responsibility of processing and managing researches on community
            health. Besides, the center is known to apply robust data analytic
            techniques to apply synthesis evidence. That, on its part, has been
            an input to ensure evidence utilization for decision making by the
            Federal Ministry of Health (FMoH) and other relevant stakeholders at
            all levels. NDMC has collaborative partnership with the Institute
            for Health Metrics and Evaluation (IHME) at the University of
            Washington, and has established a unit studying and documenting
            burden of disease at a national level. The National Data Management
            Center for Health (NDMC), under the Ethiopian Public Health
            Institute (EPHI), is responsible to archive health related data.
            Distinctively, the center shoulders the responsibility of processing
            and managing researches on community health. Besides, the center is
            known to apply robust data analytic techniques to apply synthesis
            evidence. That, on its part, has been an input to ensure evidence
            utilization for decision making by the Federal Ministry of Health
            (FMoH) and other relevant stakeholders at all levels.
          </Text>
        </View>
        <View style={[styles.header, styles.boxShadow]}>
          <Text>teklej lklsdj jls jl lsjl jlksj aha ooi a hwf jajo ij</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 12,
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
  scrollView: {},
});
export default AboutPage;
