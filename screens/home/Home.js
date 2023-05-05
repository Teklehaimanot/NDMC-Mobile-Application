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
          <TouchableOpacity
            key={news.id}
            onPress={() =>
              navigation.navigate("details", {
                title: news.title,
                image: news.image,
                description: news.discreption,
                date: news.date,
              })
            }
          >
            <View style={styles.cardview}>
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
  },
  image: {
    width: width * 1,
    height: 200,
    marginVertical: width * 0.08,
  },
});

export default Home;
