import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {

  // Points start from 0
  const [points, setPoints] = useState(0);

  // Function to increase points
  const increasePoints = () => {
    setPoints(points + 1);
  };

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#242424"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileEmoji}>👨🏻</Text>

            {/* Green tick */}
            <View style={styles.checkCircle}>
              <Text style={styles.check}>✓</Text>
            </View>
          </View>
        </View>

        {/* Horizontal Line */}
        <View style={styles.line} />

        {/* Name */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Diluka</Text>
        </View>

        {/* Email */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.emailRow}>
            <Text style={styles.emailIcon}>✉</Text>
            <Text style={styles.value}>
              diluka.w@nsbm.ac.lk
            </Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.points}>
              {points}
            </Text>
          </View>
        </View>

      </View>

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={increasePoints}
        activeOpacity={0.7}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // Header
  header: {
    height: 90,
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },

  // Main content
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  // Profile
  profileContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  profileCircle: {
    width: 145,
    height: 145,
    borderRadius: 75,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eeeeee',
  },

  profileEmoji: {
    fontSize: 75,
  },

  // Green tick
  checkCircle: {
    position: 'absolute',
    right: 12,
    bottom: 15,
  },

  check: {
    color: '#39c54a',
    fontSize: 48,
    fontWeight: 'bold',
  },

  // Horizontal line
  line: {
    height: 2,
    backgroundColor: '#555555',
    width: '100%',
    marginBottom: 20,
  },

  // Information
  infoSection: {
    marginBottom: 25,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  value: {
    fontSize: 17,
    color: '#555555',
  },

  // Email
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emailIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#444444',
  },

  // Points
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 23,
    color: '#4d5360',
    marginRight: 15,
  },

  points: {
    fontSize: 18,
    color: '#555555',
  },

  // Floating + button
  plusButton: {
    position: 'absolute',
    right: 25,
    bottom: 25,

    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: '#28334a',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  plusText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '300',
    marginTop: -2,
  },

});