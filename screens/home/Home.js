import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../../utilities/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { news } from "../../data/news";
import { useState } from "react";

const { width } = Dimensions.get("window");
const Home = ({ navigation }) => {
  const [mynews, setNews] = useState(news);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardList}>
        {mynews.map((news) => (
          <View key={news.id} style={styles.cardview}>
            <Text
              style={{
                marginHorizontal: 15,
                marginTop: 15,
                color: color.blueGray,
              }}
            >
              {news.title}
            </Text>
            <Image style={styles.image} source={news.image} />
          </View>
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
  },
  image: {
    width: width * 1,
    height: 200,
    marginVertical: width * 0.08,
    // borderRadius: 10,
  },
});

export default Home;
