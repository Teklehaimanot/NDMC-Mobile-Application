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
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

const { width } = Dimensions.get("window");
const EvidenceDetail = ({ route }) => {
  const { title, image, description, date } = route.params;

  handleDownload = async () => {
    const filename = "teki.pdf";
    try {
      const result = await FileSystem.downloadAsync(
        "https://firebasestorage.googleapis.com/v0/b/ndmc-mobile-5a8b5.appspot.com/o/fileAttached%2FAMR%20EB-%20.pdf?alt=media&token=ed760ab4-e6c2-41e3-8326-671ab8619dc9",
        FileSystem.documentDirectory + filename
      );
      console.log(result.uri);
      save(result.uri, filename, result.headers["Content-Type"]);
    } catch (error) {
      alert("dwonload error - plase try again");
    }
  };

  const save = async (uri, filename, mimetype) => {
    if (Platform.OS === "android") {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          filename,
          mimetype
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, {
              encoding: FileSystem.EncodingType.Base64,
            });
          })
          .catch((e) => console.log(e));
      } else {
        shareAsync(uri);
      }
    } else {
      shareAsync(uri);
    }
  };

  // const handleDownload = () => {
  //   const stors = storage;
  //   const starsRef = ref(stors, "fileAttached/AMR EB- .pdf");
  //   getDownloadURL(starsRef)
  //     .then((url) => {
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = "blob";
  //       xhr.onload = (event) => {
  //         const blob = xhr.response;
  //         console.log(blob);
  //       };
  //       xhr.open("GET", url);
  //       xhr.send();
  //       // alert(url);
  //       // console.log(url);
  //     })
  //     .catch((error) => {
  //       switch (error.code) {
  //         case "storage/object-not-found":
  //           break;
  //         case "storage/unauthorized":
  //           break;
  //         case "storage/canceled":
  //           break;
  //         case "storage/unknown":
  //           break;
  //       }
  //     });
  // };
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
