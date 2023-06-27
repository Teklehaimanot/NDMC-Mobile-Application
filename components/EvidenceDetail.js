import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../utilities/Colors";
import { storage } from "../services/firebase.config";
import { ref, getDownloadURL } from "firebase/storage";

const { width } = Dimensions.get("window");
const EvidenceDetail = ({ route }) => {
  const { title, image, description, date } = route.params;

  const handleDownload = () => {
    const stors = storage;
    const starsRef = ref(stors, "fileAttached/AMR EB- .pdf");
    getDownloadURL(starsRef)
      .then((url) => {
        alert(url);
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            break;
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            fontWeight: "bold",
            fontSize: 15,
            lineHeight: 20,
            letterSpacing: 1,
            color: color.greenGray,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            color: color.blueGray,
            marginBottom: 20,
            lineHeight: 25,
            letterSpacing: 0.75,
          }}
        >
          {description}
        </Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={{ margin: 10, color: color.blue }}>Date: {date}</Text>
        <Pressable style={styles.button} onPress={handleDownload}>
          <Text
            style={{ color: color.white, fontWeight: "bold", letterSpacing: 3 }}
          >
            Download - PDF
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default EvidenceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width * 1,
    height: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.primary,
    marginVertical: 15,
    marginHorizontal: width * 0.03,
  },
});
