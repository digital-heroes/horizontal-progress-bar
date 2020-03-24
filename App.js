/**
 * Horizontal Progress Bar com Animated API
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App: () => React$Node = () => {
  const [offsetX] = useState(new Animated.Value(-400));
  const translate = Animated.timing(offsetX, {
    toValue: 0,
    duration: 1000,
    easing: Easing.inOut(Easing.linear),
    useNativeDriver: true,
  });
  const reset = Animated.timing(offsetX, {
    toValue: -430,
    duration: 0,
    useNativeDriver: true,
  });
  const animation = Animated.sequence([translate, reset]);
  useEffect(() => {
    Animated.loop(animation).start();

    // Substitua esse setTimeout por uma chamada http ou qualquer outra chamada de serviço.
    setTimeout(() => {
      console.log('Chamar serviço');
    }, 4000);
  }, [animation]);
  const transform = {transform: [{translateX: offsetX}]};
  return (
    <SafeAreaView>
      <View style={styles.headerContentContainer}>
        <Text style={styles.title1}>
          O Aplicativo está sincronizando seus dados.
        </Text>
      </View>
      <Animated.View style={styles.syncProgressBarContainer}>
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
        <Animated.View style={[transform, styles.syncProgressBar]} />
      </Animated.View>
      <View style={styles.syncContentContainer}>
        <Text style={styles.title3}>Não feche ou saia do aplicativo.</Text>
        <Text style={styles.body2}>
          Você pode aproveitar para fazer um alongamento.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContentContainer: {
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 40,
  },
  syncContentContainer: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title1: {
    fontWeight: '700',
    fontSize: 32,
  },
  title3: {
    fontWeight: '700',
    fontSize: 18,
  },
  body2: {
    fontSize: 14,
  },
  syncProgressBarContainer: {
    flexDirection: 'row',
  },
  syncProgressBar: {
    height: 4,
    marginHorizontal: 10,
    width: 200,
    backgroundColor: '#0000ff',
  },
});

export default App;
