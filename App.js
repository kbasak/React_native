import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ClaimForm from './pages/ClaimForm';
import TextInputBorder from './pages/TextInputBorder';
import SearchBar from './pages/SearchBar';
import DateCalender from './pages/DateCalender';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './componets/card/Card';
import ProgressBar from './componets/card/ProgressBar';


export default function App() {
  // return (
  //   // <LinearGradient
  //   //   colors={['#ccffff', '#ffffcc', '#99ffff']}
  //   //   locations={[0.00001, .8, 1]} 
  //   //   style={{ flex: 1 }}>
  //   //   <View style={styles.container}>
  //   //     <StatusBar backgroundColor='black' />
  //   //     {/* <DateCalender/> */}
  //       <ClaimForm />
  //   //     {/* <TextInputBorder/> */}
  //   //     {/* <EditIcon/> */}
  //   //   </View>
  //   // </LinearGradient>
  //   // <View>
  //   //   <Card />
  //   // </View>
  // );
  return(
    <ScrollView>
      <ClaimForm/>
      <Card/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  
});
