import { Pressable, VStack, Input, Heading, Box, Image, Button, Text } from 'native-base';
import React, { useState } from 'react';
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';


const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';


function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    }

    const onSubmitHandler = () => {
        const payload = {
            email,
            name,
            password,
        };
        fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage(jsonRes.message);
                } else {
                    onLoggedIn(jsonRes.token);
                    setIsError(false);
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }
    return (
        <Box flex={1} bg={Colors.black}>
            <Image 
            flex={1} 
            alt="Logo" 
            resizeMode = "cover"
            size="lg"
            w="full"
            source={require("../../assets/cover.png")}
            />
            <Box 
            w="full" 
            h="full" 
            position="absolute" 
            top="0" 
            px="6"
            justifyContent="center" 
            bg={Colors.deepestGray}
            >
                <Heading>SIGN UP</Heading>
                <VStack space={8} pt="6">
                    {/* USERNAME*/}
                    <Input
                    InputLeftElement={
                        <FontAwesome name="user" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="Ram Pradhan"
                     w="70%" 
                     pl={2}
                     type="text"
                     color={Colors.main}
                     borderBottomColor={Colors.underline}
                     onChangeText = {setName}
                    />
                    {/* EMAIL */}
                    <Input
                    InputLeftElement={
                        <MaterialIcons name="email" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="user@gmail.com"
                     w="70%" 
                     pl={2}
                     type="text"
                     color={Colors.main}
                     borderBottomColor={Colors.underline} 
                     onChangeText = {setEmail}
                    />
                    {/* PASSWORD*/}
                    <Input
                    InputLeftElement={
                        <Ionicons name="eye" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="*********"
                     w="70%" 
                     type="password"
                     pl={2}
                     color={Colors.main}
                     borderBottomColor={Colors.underline}
                     onChangeText = {setPassword}
                    />
                </VStack>
                <Button 
                 _pressed={{
                    bg: Colors.main
                 }}
                 my={30} 
                 w="40%" 
                 rounded={50} 
                 bg={Colors.main}
                 onPress = { () => navigation.navigate("Bottom")}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4}
                 onPress = { () => navigation.navigate("Login")}>
                    <Text 
                    color={Colors.blue}
                    >
                        LOGIN
                    </Text>
                </Pressable>
            </Box>
        </Box>
    );
}

export default RegisterScreen;