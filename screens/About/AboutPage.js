import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { color } from "../../utilities/Colors";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const AboutPage = ({ navigation }) => {
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
          <Text style={styles.headingStyle}>DIRECTOR'S STATEMENT</Text>
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
            <Text
              onPress={() => navigation.navigate("aboutDetail")}
              style={{ color: color.blue }}
            >
              View Details
            </Text>
          </Text>
        </View>
        <View style={[styles.header, styles.boxShadow]}>
          <Text style={styles.headingStyle}>OUR STRATEGIES</Text>
          <Text
            style={{ fontSize: 15, color: color.blueOcean, marginBottom: 10 }}
          >
            Multi-disciplinary teams of high caliber staffs are working at the
            center to achieve the center’s five key strategies.
          </Text>
          <Text
            style={{
              color: color.blueGray,
              lineHeight: 20,
            }}
          >
            Strategy 1: Build research Capacity on data mining and big data
            management for EPHI and partners (Capacity) Strategy 2: Establish
            specific databases within NDMC, generate data and share, and improve
            data availability and accessibility for local and international
            users (Data)
          </Text>
          <Text
            style={{ color: color.blueGray, lineHeight: 20, marginVertical: 5 }}
          >
            Strategy 2: Establish specific databases within NDMC, generate data
            and share, and improve data availability and accessibility for local
            and international users (Data)
          </Text>
          <Text
            style={{ color: color.blueGray, lineHeight: 20, marginVertical: 5 }}
          >
            Strategy 3: Establish and strengthen local and international
            collaboration (Collaboration)
          </Text>
          <Text
            style={{ color: color.blueGray, lineHeight: 20, marginVertical: 5 }}
          >
            Strategy 4: Ensure local and international funding to undertake the
            different health and health related researches (Funding)
          </Text>
          <Text
            style={{ color: color.blueGray, lineHeight: 20, marginVertical: 5 }}
          >
            Strategy 5: Ensure utilization of population health evidence for
            decision in the FMOH and key partners (Utilization)
          </Text>
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
  headingStyle: {
    fontSize: 15,
    color: color.greenGray,
    marginBottom: 10,
    fontWeight: "bold",
    borderBottomWidth: 0.5,
    textAlign: "center",
    padding: 5,
    letterSpacing: 2,
  },
});
export default AboutPage;
