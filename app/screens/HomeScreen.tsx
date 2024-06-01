import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const HomeScreen =()=>{

    const[depositAmount, setDepositAmount]= useState(0);

    //add more state variables as needed

    const handleDeposit=()=>{

        //Implement deposit logic
    };
    return(
        <View>
            <Text>Week Deposit Tracker</Text>
            
        </View>
    )
}