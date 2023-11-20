import { StyleSheet, Text, View } from "react-native";
import AdmissionDate from "./AdmissionDate";

function DateCalender() {
    return (
        <>
            <View style={styles.inputContainer}>
                <Text>Date Of Admission</Text>
                <AdmissionDate />
            </View>
        </>
    );
}

export default DateCalender;

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: '20%',
        paddingLeft: 10,
        justifyContent:'flex-start'
    },
})