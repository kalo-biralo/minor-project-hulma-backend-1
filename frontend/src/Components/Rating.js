import React from 'react'
import { HStack, Text }  from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../color';


function Rating(props) {
    const size = 8;
    const color = Colors.orange;
    return (
        <HStack 
        space = {0.4}
        mt={1}
        alignItems="center"
        >
            <FontAwesome name={ props.value>=1?"star":props.value >=0.5?"star-half-o":"star-o"} 
            color={color} 
            size = {size} />
            <FontAwesome name={props.value>=2?"star":props.value >=1.5?"star-half-o":"star-o"} 
            color={color} 
            size = {size} />
            <FontAwesome name={props.value>=3?"star":props.value >=2.5?"star-half-o":"star-o"} 
            color={color}
            size = {size} />
            <FontAwesome name={props.value>=4?"star":props.value >=3.5?"star-half-o":"star-o"} 
            color={color} 
            size = {size} />
            <FontAwesome name={props.value>=5?"star":props.value >=4.5?"star-half-o":"star-o"} 
            color={color} 
            size = {size}
            />
             {props.text && 
            (<Text
              fontSize={12}
              ml={2}>
                {props.text}
              </Text>)}
        </HStack>
    );
}

export default Rating 

/*Objects are not valid as a React child React error. need to fix this error*/
           