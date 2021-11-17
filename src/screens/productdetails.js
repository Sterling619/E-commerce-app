import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function productDetails() {

    const navigation = useNavigation()
    return (
    
      <ScrollView>
          <TouchableOpacity>
            <View>
                <Text style={font = 'bold'}> Book</Text>
                <Image source={require('../assets/books.jpg')} />
                <Text>GHc 45</Text>
            </View>
            <View>
                <Text style={font = 'bold'}> Pens</Text>
                <Image source={require('../assets/pen.png')} />
                <Text>Ghc 2</Text>
            </View>
            <View>
                <Text style={font = 'bold'}> Rulers</Text>
                <Image source={require('../assets/ruler.jpg')} />
                <Text>GHc 5</Text>
            </View>
            <View>
                <Text style={font = 'bold'}> Eraser</Text>
                <Image source={require('../assets/eraser.jpg')} />
                <Text> Ghc 1</Text>
            </View>
            </TouchableOpacity>
            </ScrollView>

    )
}

export default productDetails

const StyleSheet = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#6495ed",
        justifyContent: "center",
        alignItems: 'center',
    },})
