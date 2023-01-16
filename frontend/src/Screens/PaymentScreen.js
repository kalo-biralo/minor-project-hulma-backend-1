import { Box, Center, Text, FormControl, Input, ScrollView, VStack, HStack, Image, Spacer} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from '../Components/Buttone'
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMethodes = [
    {
        image: require("../../assets/images/fonepay.png"),
        alt: 'fonepay',
        icon: 'Ionicons'
    },
    
    {
        image:require("../../assets/images/e-sewa.png"),
        alt: "e-sewa",
        icon: 'fontAwesome'
    },
    {
        image: require("../../assets/images/khalti.png"),
        alt:"khalti",
        icon: 'fontAwesome'
    },
    {
        image: require("../../assets/images/cod.png"),
        alt:"cash on delivery",
        icont: 'fontAwesome'
    },
];

function PaymentScreen() {
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
        {/*Header */}
        <Center pb={15}>
        <Text color ={Colors.white} fontSize={14} bold>
             PAYMENT METHOD
        </Text>
        </Center>
        {/* SELECTION */}
        <Box h="full" bg={Colors.subGreen} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={6} mt={5}>
                    {paymentMethodes.map((i, index) => (
                        <HStack 
                        key = {index}
                        alignItems = 'center'
                        bg = {Colors.white}
                        px = {3}
                        py = {1}
                        rounded = {10}
                        justifyContent = 'space-between'
                        >
                            <Box>
                                <Image source = {i.image} 
                                alt = {i.alt}
                                resizeMode = 'contain'
                                w={60}
                                h={50}
                                />
                            </Box>
                            {i.icon === 'Ionicons' ? (
                            <Ionicons 
                            name = 'checkmark-circle'
                            size = {30}
                            color = {Colors.main}
                            /> ): (
                            <FontAwesome 
                            circle = 'circle-thin'
                            size = {30}
                            color = {Colors.main}
                            />)
                    }
                        </HStack>
                    ))}         
                     <Buttone bg={Colors.main} color={Colors.white}>
                        CONTINUE
                    </Buttone>
                    <Text
                    italic
                    textAlign = 'center'>
                        Payment method is <Text
                        bold>
                            Fonepay
                        </Text> by default
                    </Text>
                </VStack>
            </ScrollView>
        </Box>
       
    </Box>
    );
}

export default PaymentScreen;