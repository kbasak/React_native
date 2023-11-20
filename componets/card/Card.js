import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native';
import ProgressBar from './ProgressBar';
import CardStyle from './CardStyle';
//Credit Card Component
const Card = () => {

const [cards, setCards] = useState([
    {
        id: 1, number: '2376 9847 5467 1234', holder: 'Kausik Basak',
        expiration: '03/28',
        logo: 'https://img.icons8.com/color/70/000000/visa.png',
        background: 'https://cdn.dribbble.com/users/387195/screenshots/2260293/attachments/423582/preview3.png?compress=1&resize=400x300&vertical=top',
        limit: 100000,
        expenditure: 20000

    },
    {
        id: 2, number: '9876 9876 4563 5678', holder: 'Kausik Basak',
        expiration: '09/26', logo: 'https://img.icons8.com/color/70/000000/mastercard.png',
        background: 'https://www.dhresource.com/0x0s/f2-albu-g8-M00-E3-84-rBVaVF5q-d-AGEvcAACOeQl6wTQ367.jpg/grey-wallpapers-3d-stereo-geometric-abstract.jpg',
        limit: 100000,
        expenditure: 80000
    },
    {
        id: 3, number: '7654 9845 8709 9008', holder: 'Kausik Basak',
        expiration: '01/27', logo: 'https://img.icons8.com/color/70/000000/visa.png',
        background: 'https://s3.envato.com/files/223757883/590Dark%20Blue%20Abstract%20Low%20Poly%20Background.jpg',
        limit: 100000,
        expenditure: 60000
    },
]);

var progressDetails=<Text style={CardStyle.progressDefaultText}>Click On a Credit Card to View Total Outstanding & Balance Report!!!</Text>;

const[progressData,setProgressData]=useState(progressDetails);
function cardExpenseHandler(id) {
    {
        cards.filter(card => card.id === id).map(filteredCard => (
            setProgressData(<>
                <ProgressBar limit={filteredCard.limit} expenditure={filteredCard.expenditure} cardNumber={filteredCard.number} />
                <TouchableOpacity style={CardStyle.paymentButton} onPress={cardExpenseRemover}>
                    <Text style={CardStyle.buttonText}>Close</Text>
                </TouchableOpacity></>)
        ))
    }
}

function cardExpenseRemover(){
    setProgressData(progressDetails);
}

return (
    <View style={CardStyle.container}>
        <Text style={CardStyle.title}>Credit Cards Info</Text>
        
        <ScrollView
            horizontal
            contentContainerStyle={CardStyle.carouselContainer}
            showsHorizontalScrollIndicator={false}
        >

            {cards.map((card) => (
                <Pressable key={card.id} style={({ pressed }) => pressed && CardStyle.pressedItem} onPress={cardExpenseHandler.bind(this, card.id)}>
                    <View style={CardStyle.cardContainer}>
                        <ImageBackground source={{ uri: card.background }} resizeMode="cover" style={CardStyle.image}>
                            <Image source={{ uri: card.logo }} style={CardStyle.logo} />
                            <Text style={CardStyle.cardNumber}>{card.number}</Text>
                            <View style={CardStyle.cardInfoContainer}>
                                <View style={CardStyle.cardInfoItem}>
                                    <Text style={CardStyle.cardInfoLabel}>Card Holder</Text>
                                    <Text style={CardStyle.cardInfoValue}>{card.holder}</Text>
                                </View>
                                <View style={CardStyle.cardInfoItem}>
                                    <Text style={CardStyle.cardInfoLabel}>Expiration</Text>
                                    <Text style={CardStyle.cardInfoValue}>{card.expiration}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </Pressable>

            ))}
        </ScrollView>
        <View style={CardStyle.progressBar}>
            {progressData}
        </View>
        
    </View>
);
};

export default Card;