import { StyleSheet, View, SafeAreaView, Text } from "react-native";
const EvidenceBrief = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text>Evidence Briefs</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default EvidenceBrief;
