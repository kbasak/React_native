import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginTop: 40,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0f8f5',
        height: 600
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000063',
    },
    cardContainer: {
        marginHorizontal: 10,
        width: 300,
        height: 180,
        backgroundColor: 'white',
        borderBottomEndRadius: 10,
        justifyContent: 'space-between',
        elevation: 10,
        borderWidth: 2,
        borderColor: '#401abc',
        borderBottomWidth: 6,
        borderBottomColor: '#ccc',
    },
    pressedItem:{
        opacity:.75
    },
    cardNumber: {
        fontSize: 18,
        letterSpacing: 4,
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 25,
        color: '#ffffff',
        fontWeight: '900'
    },
    cardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20
    },
    cardInfoItem: {
        minWidth: '65%',
        flex: 1,
        paddingLeft: 4
    },
    cardInfoLabel: {
        fontSize: 12,
        color: '#ffffff',
    },
    cardInfoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    carouselContainer: {
        marginVertical: 40,
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 30,
        marginLeft: 20,
        marginBottom: 10
    },
    paymentButton: {
        backgroundColor: '#00008B',
        marginTop:20,
        marginBottom:10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 18,
        maxHeight:40,
        maxWidth:80,
        marginLeft:'75%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    progressBar: {
        backgroundColor: '#feddab',
        minHeight: 180,
        maxWidth: '95%',
        marginLeft: 5,
        marginTop: 2,
        marginRight: 10,
        borderRadius: 20,
    },
    progressDefaultText:{
        padding:30,
        margin:20,
        fontSize:18,
        fontWeight:'700',
        fontFamily: 'monospace',
        color:'#000000'
    }
});

export default CardStyle;
