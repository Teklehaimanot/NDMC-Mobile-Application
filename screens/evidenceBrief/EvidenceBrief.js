import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../../utilities/Colors";

const { width } = Dimensions.get("window");
const EvidenceBrief = ({ navigation }) => {
  const mynews = [
    {
      id: 1,
      title:
        "UNDER-FIVE MORTALITY ASSOCIATED WITH ANTIMICROBIAL-RESISTANT BACTERIA IN ETHIOPIA",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/ndmc-mobile-5a8b5.appspot.com/o/evidenceBrief%2FScreenshot%202023-06-27%20at%2012.39.49%20PM.png?alt=media&token=c8fbed1f-8321-4e00-997d-a56d9af21ae5",
      description:
        "The high child mortality burdens in resource-limited settings are attributable to various causes including infectious diseases, malnutrition, and congenital and birth defects. Resistance to broad-spectrum antimicrobials is probably the major cause of death from treatable bacterial infections after hospitalization in developing countries including Ethiopia. However, evidence are scarce on bacterial etiology contributing to under five deaths and their antimicrobial resistance (AMR) levels in Ethiopia. This study intends to address these evidence gaps using two novel causes of death studies conducted in Ethiopia: Child health and mortality prevention surveillance (CHAMPS) on 196 stillbirths and under-five deaths and Study of illness in preterm (SIP) on 1109 preterm deaths.",
      date: "June 10 2024",
    },
    {
      id: 2,
      title: "tek",
      image: "https://log.ephi.com",
      description: "teklehaimanot",
      date: "June 10 2024",
    },
    {
      id: 3,
      title: "tek",
      image: "https://log.ephi.com",
      description: "teklehaimanot",
      date: "June 10 2024",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardList}>
        {mynews &&
          mynews.map((news) => (
            <TouchableOpacity
              key={news.id}
              onPress={() =>
                navigation.navigate("EvidenceDetails", {
                  title: news.title,
                  image: news.imageUrl,
                  description: news.description,
                  date: news.date,
                })
              }
            >
              <View style={styles.cardview}>
                <Text
                  style={{
                    marginHorizontal: 15,
                    marginTop: 15,
                    color: color.blueOcean,
                    backgroundColor: color.keyllyGreen,
                    padding: 15,
                    borderRadius: 5,
                    lineHeight: 20,
                    letterSpacing: 0.5,
                  }}
                >
                  {news.title}
                </Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: news.imageUrl,
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    backgroundColor: color.grayDark,
  },
  cardview: {
    backgroundColor: color.gray,
    flexDirection: "column",
    justifyContent: "space-between",
    width: width * 1,
    borderColor: color.blueGray,
    borderWidth: 0.2,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.greenGray,
    borderRadius: 5,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    marginVertical: width * 0.08,
    marginHorizontal: width * 0.1,
    borderRadius: 5,

    // marginHorizontal: 15,
  },
});

export default EvidenceBrief;
