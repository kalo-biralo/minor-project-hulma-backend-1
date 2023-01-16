import { Box, Center, Icon, Image, VStack} from 'native-base';
import {ImageBackground } from 'react-native'
import React from 'react';
import Colors from "../color";
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native'

// import BackgroundImage from "react-background-image";
// import intro from '../../assets/intro.jpg';
function NotVerifyScreen({navigation}) {
    return (
        
        <Box flex={1}
        justifyContent='space-between'
        w='full'
        h='full'
        >
            <ImageBackground source={require('../../assets/intro.jpg')} 
            >     
            <Center
            w="full" 
            h="83.46%"
            >
                <Image source = {require("../../assets/logo3.png")} 
                alt="logo"
                size="xl"
                rounded = "full"
                />
            </Center>
            <VStack 
             space={6}
             px={5}
             alignItems="center"
             >
                <Buttone
                 bg={Colors.black}
                 color={Colors.white}
                 onPress = { () => navigation.navigate("Register")}
                >
                    REGISTER
                </Buttone>
                <Buttone
                 bg={Colors.main}
                 color={Colors.black}
                 onPress = { () => navigation.navigate("Login")}
                 >
                    LOGIN
                 </Buttone>
                 {/* <BackgroundImage source={require("../../assets/intro.jpg")}/> */}
             </VStack>
             </ImageBackground>
        </Box>

    );
}

export default NotVerifyScreen;