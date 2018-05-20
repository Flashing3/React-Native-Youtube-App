// import { StyleSheet, Text, View } from 'react-native'//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { YellowBox } from 'react-native';
import MainTabBar from './navigation/main_tab_bar';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// disable really annoying in app warnings
console.disableYellowBox = true;

const App = (props) => {
  return <MainTabBar />;
};


export default App;
