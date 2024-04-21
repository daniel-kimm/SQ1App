import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SleepLogHeader = () => {
  return (
    <View style={styles.headerGrid}>
      <Image
        source={require('../assets/sleep.png')}
        style={styles.headerIcon}
      />
      <Text style={styles.headerText}>Sleep Log</Text>
    </View>
  );
};

function SleepLog() {
  return (
    <View style={styles.container}>
      <SleepLogHeader />
      <View style={styles.gridsContainer}></View>
      <View style={styles.contentWrapper}>
        <Image source={require('../assets/calendar.png')} style={styles.calendarImage} />
        <View style={styles.gridsContainer}>
          <View style={styles.grid}>
            <Text style={styles.gridTitle}>Sleep Goal:</Text>
          </View>

          <View style={styles.grid}>
            <Text style={styles.gridTitle}>Hours of Sleep:</Text>
          </View>

          <View style={styles.grid}>
            <Text style={styles.gridTitle}>Time on a Device Before Bed:</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 100,
    paddingHorizontal: 0,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  calendarImage: {
    width: '110%',
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingHorizontal: 105,
    backgroundColor: '#D08BFA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#33363F',
    marginHorizontal: 20,
    marginTop: -50,
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
  },
  gridsContainer: {
    marginTop: 10,
  },
  grid: {
    padding: 23,
    paddingHorizontal: 90,
    marginHorizontal: 0,
    marginTop: 10,
    backgroundColor: '#D08BFA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#33363F',
  },
  gridTitle: {
    fontSize: 18,
    marginLeft: -70,
  },
});

export default SleepLog;
