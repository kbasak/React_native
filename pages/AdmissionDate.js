import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";

function AdmissionDate() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        maxHeight:'90%',
                        paddingLeft:5,
                        margin:5,
                        minWidth:'100%',
                        marginLeft:-2,
                        borderColor:'black',
                        borderWidth:1.5
                    }}
                    onFocus={showDatepicker}
                    placeholder="useless placeholder"
                    value={date.toLocaleDateString()} />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
                <AntDesign onPress={showDatepicker} name="calendar" size={40} color="#5c0bff" />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AdmissionDate;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
    }
})