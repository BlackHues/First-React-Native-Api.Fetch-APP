import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Countries Details</Text>
      <FlatList
        data={countries}
        // independence
        // currency name and symbol, 
        // language, latitude and longitude, Google Maps URL (which should navigate to Google Maps),
        keyExtractor={item => item.name.common}
        renderItem={({ item }) => (
          <View style={styles.countryContainer}>
            <Text>Name: {item.name.common}</Text>
            <Text>Official Name: {item.name.official}</Text>
            <Text>Region: {item.region}</Text>
            <Text>Subregion: {item.subregion}</Text>
            <Text>Population: {item.population}</Text>
            <Text>Time Zones: {item.timezones}</Text>
            <Text>Continent: {item.continents}</Text>
            <Text>Area: {item.area}</Text>
            <Text>Google Maps: "{item.maps.googleMaps}"</Text>
            {/* Display other country details */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  countryContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16, 
    marginBottom: 20, 
    borderRadius: 8, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    width: '90%', // Adjust the width as needed
  },
  text: {
    fontSize: 16, // Adjust the font size as needed
    marginBottom: 8, // Add spacing between text lines
  },
});



export default HomeScreen;