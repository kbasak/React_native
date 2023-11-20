import { FlatList, ScrollView, StyleSheet, Text, TextBase, TextInput, View } from "react-native";
import AdmissionDate from "./AdmissionDate";
import DischargeDate from "./DischargeDate";
import DropdownComponent from "./DropdownComponent";
import { useState } from "react";
import TextInputBorder from "./TextInputBorder";

//Claim Form

function ClaimForm() {

    const [clicked, setClicked] = useState(false);

    function searchHospitalHandler() {
        setClicked(true);
    }

    var hospitalName = '';
    if (clicked) {
        hospitalName = <DropdownComponent />;
    }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.outsideContainer}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>Claim Details</Text>
                </View>
                <View style={{ borderColor: 'black',borderStyle:'dashed', borderWidth: 1.5, padding: 30, elevation: 10 }}>
                    <View style={{
                        paddingBottom: 10,
                        marginBottom: 30,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 2
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Hospital Details</Text>
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Date Of Admission</Text>
                        <AdmissionDate />
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Date Of Discharge</Text>
                        <DischargeDate />
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Hospital</Text>
                        <TextInput style={styles.textInputStyle} placeholder="Enter Hospital Name"
                        // onFocus={searchHospitalHandler} />
                        />
                        {hospitalName}
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Treatment Name</Text>
                        <DropdownComponent />
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Amount Claimed</Text>
                        <TextInput style={styles.textInputStyle} placeholder="Enter Amount" keyboardType="number-pad" />
                    </View>
                    <View style={{ paddingBottom: 12, maxWidth: '90%' }}>
                        <TextInputBorder />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default ClaimForm;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        textAlign: 'left',
        padding: '5%',
        borderWidth: 1,
        borderColor: 'black'
    },
    outsideContainer: {
        marginBottom: 20,
        paddingTop: 20,
        paddingLeft: 5
    },
    textInputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        maxHeight: '90%',
        paddingLeft: 5,
        margin: 5,
        minWidth: '100%',
        marginLeft: -2,
        borderColor: 'black',
        borderWidth: 1.5
    }
})