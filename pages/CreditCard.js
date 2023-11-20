import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

function CreditCard() {
    return (
        <View style={styles.card}>
            <LinearGradient
                colors={['#131039', '#3a0cbb', '#131039']}
                start={{ x: 0.1, y: .9 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.linearGradient}>
                    <View>
                        <Text>Number</Text>
                    </View>
                    <View>
                        <Text>Name</Text>
                    </View>
                    <View>
                        <Text>Expiry Date</Text>
                    </View>
                    <View>
                        <Text>Card Name</Text>
                    </View>
            </LinearGradient>
        </View>
    );
}

export default CreditCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#08143d',
        minHeight: '27%',
        maxHeight: '27%',
        maxWidth: '90%',
        minWidth: '90%',
        marginTop: '20%',
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: '2%'

    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
})