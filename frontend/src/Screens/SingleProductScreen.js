import { Box, HStack, ScrollView, Image, Heading, Text, Spacer } from 'native-base';
import React, { useState } from 'react';
import Rating from '../Components/Rating';
import NumericInput from "react-native-numeric-input";
import Colors from '../color';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';
import { useNavigation } from '@react-navigation/native';
import Quota from '../Components/Quota';


function SingleProductScreen({route}) {
    const[value, setValue] = useState(0);
    const navigation = useNavigation();
    const product = route.params;
    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={{ uri: product.image }} 
                alt="Image"
                w="full" 
                h={300} 
                resizeMode="contain"
                 />
                 <Heading  bold fontSize={15} mb={2} lineHeight={22}>
                   {product.name}
                 </Heading>
                    <Rating value={product.rating} text={ `${product.numReviews} reviews` }/>
                    <Quota quotaFill = {product.quotaFilled} quotaRequired = {product.quotaRequirement} fontsize={12}/>
                    <HStack space={2} alignItems="center" my={5}>
                        {
                        product.countInStock > 0 ? (
                        <NumericInput 
                        value={value} 
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        maxValue={product.countInStock}
                        minValue={0}
                        borderColor={Colors.deepgray}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{color: Colors.white}}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                         />
                        ):
                       ( <Heading bold color={Colors.red} italic fontSize = {19}>
                            Out of Stock
                        </Heading>)
                    }

                        <Heading bold color={Colors.black} fontSize={19}>
                            Rs {product.price}
                            </Heading>
                    </HStack>
                    <Text lineHeight={24} fontSize={12}>
                       {product.description}
                    </Text>
                    <Buttone 
                    bg={Colors.main} 
                    color={Colors.white} 
                    mt={10}
                    onPress = {() => navigation.navigate("Cart")}>
                        ADD TO CART
                    </Buttone>
                    <Review  />
                 </ScrollView>
        </Box>
    );
}

export default SingleProductScreen;