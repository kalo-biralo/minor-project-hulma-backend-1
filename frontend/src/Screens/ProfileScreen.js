import { Image, Center, Heading, Text, View } from 'native-base';
import Colors from '../color';
import React from 'react';
import Tabs from '../Components/Profile/Tabs';


function ProfileScreen() {
    return (
    <>
        <Center
        bg={Colors.main}
        pt={10}
        pb={6}
        >
            Profile Screen
            <Image source = {{uri:"https://res.cloudinary.com/daohp1yax/image/upload/v1669867727/ppholder_ihhf1v.webp"}} 
             alt="profile"
             w={24}
             h={24}
             rounded = "full"
             resizeMode = "cover"
             />
             <Heading
             bold
             fontSize = {15}
             isTruncated
             my={2}
             color={Colors.white}
             >
                Admin Doe
             </Heading>
             <Text
             italic
             fontSize={10}
             color={Colors.white}
             >
                Joined Dec 12 2022
             </Text>
        </Center>
        <Tabs />
    </>
    );
}

export default ProfileScreen;