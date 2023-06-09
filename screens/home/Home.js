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
import { useEffect, useState } from "react";
import { database, storage } from "../../services/firebase.config";
import { onValue, ref as myref } from "firebase/database";
import { getDownloadURL, ref } from "firebase/storage";
// import { getDownloadURL } from "firebase/storage";

const { width } = Dimensions.get("window");
const Home = ({ navigation }) => {
  const [mynews, setNews] = useState([]);

  useEffect(() => {
    const db = database;
    const obj = [];
    const myobj = [];
    const getData = async () => {
      onValue(myref(db, "news"), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          const result = Object.keys(data).map((key) => [key, data[key]]);
          for (let i = 0; i < result.length; i++) {
            let key = result[i][0];
            let value = result[i][1];
            obj.push({ ...value, id: key });
            obj[key] = value;
          }
        }
      });
      if (obj.length) {
        obj.map((ob) => {
          const mystorage = storage;
          const starsRef = ref(mystorage, "news/news1.jpg");
          getDownloadURL(starsRef)
            .then((url) => {
              ob.image = url;
              myobj.push(ob);
              setNews(myobj);
            })
            .catch((error) => {
              switch (error.code) {
                case "storage/object-not-found":
                  console.log("object not found");
                  break;
                case "storage/unauthorized":
                  console.log("unauthorized user");
                  break;
                case "storage/canceled":
                  console.log(" canceled");
                  break;
                case "storage/unknown":
                  console.log("unkown user");
                  break;
              }
            });
        });
      }
    };

    getData();
    // console.log("myobj", myobj);
  }, []);

  //   onValue(myref(db, "news"), (snapshot) => {
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       const result = Object.keys(data).map((key) => [key, data[key]]);
  //       const obj = [];
  //       const myobj = [];

  //       for (let i = 0; i < result.length; i++) {
  //         let key = result[i][0];
  //         let value = result[i][1];
  //         obj.push({ ...value, id: key });
  //         obj[key] = value;
  //       }
  //       obj.map((ob) => {
  //         const mystorage = storage;
  //         const starsRef = ref(mystorage, "news/news1.jpg");
  //         getDownloadURL(starsRef)
  //           .then((url) => {
  //             ob.image = url;
  //             myobj.push(ob);
  //             // console.log("myobj", myobj);
  //             setNews(myobj);
  //           })
  //           .catch((error) => {
  //             switch (error.code) {
  //               case "storage/object-not-found":
  //                 console.log("object not found");
  //                 break;
  //               case "storage/unauthorized":
  //                 console.log("unauthorized user");
  //                 break;
  //               case "storage/canceled":
  //                 console.log(" canceled");
  //                 break;
  //               case "storage/unknown":
  //                 console.log("unkown user");
  //                 break;
  //             }
  //           });
  //       });
  //     }
  //   });
  // }, []);

  // console.log(mynews);

  // const [image, setImage] = useState();
  // useEffect(() => {
  //   const mystorage = storage;
  //   const starsRef = ref(mystorage, "news/news1.jpg");
  //   getDownloadURL(starsRef)
  //     .then((url) => {
  //       setImage(url);
  //     })
  //     .catch((error) => {
  //       switch (error.code) {
  //         case "storage/object-not-found":
  //           console.log("object not found");
  //           break;
  //         case "storage/unauthorized":
  //           console.log("unauthorized user");
  //           break;
  //         case "storage/canceled":
  //           console.log(" canceled");
  //           break;
  //         case "storage/unknown":
  //           console.log("unkown user");
  //           break;
  //       }
  //     });
  // });

  // console.log(image);
  // const myimage = "../../assets/news1.jpg";
  // console.log(mynews.map((news) => console.log(news.image)));

  console.log("news", mynews);

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
                  color: color.blueGray,
                }}
              >
                {news.title}
              </Text>
              <Image style={styles.image} source={{ uri: news.image }} />
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
