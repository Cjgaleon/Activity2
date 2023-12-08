import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require('./logo.png')}
      />
        </View>

      <Text style={styles.title}>小臂恐龙</Text>

      <Text style={styles.text}>Lorem ipsum dolor sit amet.{'\n\n'} 
      Aut quas quia in sunt aperiam aut repellendus quasi vel maxi</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.buttonText}>Creat Account</Text>
        </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#262626'
     },

     logoContainer: {
        marginBottom: 16,
        alignItems: 'center',
     },

     logo: {
        width: 100,
        height: 120,
     },

     title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#F0F3F4'
     },

     buttonContainer: {
        width: '80%',
        backgroundColor: '#373636',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 10,
        overflow: 'hidden',
     },

     buttonText: {
        color: '#F3BB5F', 
        padding: 10,
        fontSize: 17,
     },

    text: {
        color: '#F0F3F4',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    }

});

export default LandingPage;
