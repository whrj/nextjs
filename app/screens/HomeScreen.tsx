import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { text } from 'stream/consumers';

const HomeScreen =()=>{

    const[depositAmount, setDepositAmount]= useState(0);

    //add more state variables as needed

    const handleDeposit=()=>{

        //Implement deposit logic
    };
    return(
        <View>
            <Text>Week Deposit Tracker</Text>
            {/*Add UI components for deposit tracking */}
            <TextInput placeholder="Enter deposit amount" keyboardType="numeric" value={depositAmount.toString()}
            onChangeText={(text)=>setDepositAmount(parseFloat(text))} />
            <Button title="Make Deposit" onPress={handleDeposit}/>
            {/*Add more UI components for other features */}
        </View>
    );
};
export default HomeScreen;