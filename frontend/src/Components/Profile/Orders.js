import {Box, Button, HStack, ScrollView, Text} from "native-base";
import React from 'react';

import {Pressable} from "react-native";
import Colors from "../../color"

const Orders =() => {
    return(
        <Box h='full' bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
               {/*paid order*/}
               <Pressable>
                    <HStack 
                    space={4} 
                    justifyContent="space-between" 
                    alignItems="center" 
                    bg={Colors.deepestGray}
                   
                    py={5}
                    px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                       122938323743847832
                        </Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>
                      PAID
                        </Text>
                        <Text fontSize={11} bold color={Colors.blue} isTruncated>
                       Nov 28 2022
                        </Text>
                        <Button
                        px={7}
                        py={1.5}
                        rounded={50}
                        bg={Colors.main}
                        _text={{
                            color:Colors.white,
                        }}
                        _pressed={{
                            bg:Colors.main,
                        }}
                        >
                         Rs 1000
                        </Button>
                    </HStack>
                </Pressable>
                {/*not paid order*/}
                <Pressable>
                    <HStack 
                    space={4} 
                    justifyContent="space-between" 
                    alignItems="center" 
                   
                    py={5}
                    px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                       122938323743847832
                        </Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>
                     NOT PAID
                        </Text>
                        <Text fontSize={11} bold color={Colors.blue} isTruncated>
                       Dec 6 2022
                        </Text>
                        <Button
                        px={7}
                        py={1.5}
                        rounded={50}
                        bg={Colors.red}
                        _text={{
                            color:Colors.white,
                        }}
                        _pressed={{
                            bg:Colors.red,
                        }}
                        >
                         Rs 10
                        </Button>
                    </HStack>
                </Pressable>
                
            </ScrollView>
         
        </Box>
    );
};

export default Orders;