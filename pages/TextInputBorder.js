import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
//text input with edit & discard option
function TextInputBorder() {
    const [addressEditable, setAdressEditable] = useState(false);
    const [address, setAddress] = useState('Claim Details');
    const editAddress = () => {
        setAdressEditable(!addressEditable);
    }
    var enableEditOption = <Feather
        style={styles.searchIcon}
        name="edit-2" size={26} color='darkblue'
        onPress={editAddress} />;

    if (addressEditable) {
        enableEditOption = <Feather style={styles.searchIcon}
            name="check-circle" size={24} color="#000000" onPress={editAddress} />;
    }
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={{
                        fontSize: 20,
                        marginLeft: -15,
                        minWidth: '98%',
                        maxWidth: '120%',
                        paddingTop: 10,
                        paddingRight: 35,
                        paddingBottom: 10,
                        paddingLeft: 5,
                        borderWidth:2,
                        borderRadius: 10,
                        borderColor: addressEditable ? '#ffa600' : 'gray',
                        color: '#000000',
                        fontSize: 20
                    }}

                    value={address}
                    editable={(addressEditable)}
                    onChangeText={(text) => { setAddress(text) }}
                    placeholder="Enter Address!!!"
                // onFocus={editAddress}
                />
                <View>
                    {enableEditOption}
                </View>
            </View >
        </>
    );
}
export default TextInputBorder;

const styles = StyleSheet.create({

    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchIcon: {
        marginTop: -12,
        marginLeft: -35,
        width:30,
        height:30,
        position: 'absolute',
        backgroundColor: '#fffec8'
    },
})

