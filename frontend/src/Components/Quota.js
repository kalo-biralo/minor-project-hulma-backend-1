import React from 'react'
import { HStack, Text } from 'native-base'

const Quota = props => {
    return (
        <HStack>
            <Text fontSize = {props.fontsize}>Quota : {props.quotaFill} out of {props.quotaRequired}</Text>
        </HStack>
    )
}

export default Quota;