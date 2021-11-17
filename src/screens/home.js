import React from 'react';
import {Text, View, TouchableOpacity,TextInput} from 'react-native';

export default function App() {
  return(
    
    <View style={{width:"100%",height:"100%",
    justifyContent:"center",alignSelf:"center",alignItems:"center"}}>
      <Text  style={{textAlign:'right',margin:"20%"}}> Welcome Marcos</Text>
      <TextInput placeholder={'Enter User Name'} style={{height:42,width:"100%",borderBottomWidth:2}}/>
      <TextInput placeholder={'Enter Password'} style={{height:42,width:"100%", borderBottomWidth:2,marginTop:"5%"}}/>
      
      <View style={{marginTop:"15%", width:"65%"}}>
      <TouchableOpacity style={{borderWidth:1,height:42,width:"60%",justifyContent:"center",
    borderRadius:30, backgroundColor:"#7fffd4", alignSelf:"center", textAlign:"center", marginTop:"10%" }}>
 <Text style={{color:"white"}}> Continue</Text>
      </TouchableOpacity>
      </View>
    </View>

   )
  }
