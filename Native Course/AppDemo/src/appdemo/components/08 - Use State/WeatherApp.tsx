import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

interface WeatherAppProps {
  [city: string]: string;
}

const weatherdata: WeatherAppProps = {
  London: "20°C, clear",
  NewYork: "25°C, sunny",
  Tokyo: "18°C, cloudy",
  Sydney: "22°C, sunny",
  Berlin: "15°C, rainy",
  Mumbai: "30°C, humid",
  CapeTown: "23°C, windy",
  Moscow: "10°C, overcast",
  RioDeJaneiro: "28°C, sunny",
  Toronto: "19°C, drizzling",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(weatherdata[city] || "No  data avaiable");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeatherApp</Text>
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text style={styles.weather}>{weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  weather: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WeatherApp;
