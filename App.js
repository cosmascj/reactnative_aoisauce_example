import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import OtherComponent from "./OtherComponent";
import listingsApi from "./api/listings";

// BELOW IS THE ACTION

// BELOW IS THE SETUP FOR THE REDUCER

const DATA = [
  {
    key: "1",
    name: "cosmas",
  },
  { id: "2", name: "dennis" },
  { id: "3", name: "elvis" },
  { id: "4", name: "Surakat" },
  { id: "5", name: "Suratkat" },
  { id: "6", name: "Suragpkat" },
  { id: "7", name: "Surakat" },
  { id: "8", name: "Suravkat" },
  { id: "9", name: "Surakat" },
  { id: "10", name: "Surakatgg" },
  { id: "90", name: "Surakkkat" },
  { id: "12", name: "Surppakat" },
];

const Item = ({ item, backgroundColor, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}> {item.name}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListing();
    if (!response.ok) return setError(true);
    setError(false);
    setListings(response.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      {error && (
        <>
          <Text style={{ marginTop: 100 }}>not found</Text>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containernew: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
