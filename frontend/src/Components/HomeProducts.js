import { Flex, ScrollView, Pressable, Image, Box, Heading, Text } from 'native-base';
import Colors from '../color';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native'
import Quota from './Quota';
import { useEffect, useState } from 'react';

function HomeProducts() {
    const navigation = useNavigation();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch ('https://b30f-2400-1a00-b020-924e-5cbf-4afe-ce63-d429.in.ngrok.io/api/hulma');
            const json = await response.json();
            if(response.ok) {
                setProducts(json);
            }
        }

        fetchProducts()
    },[])

    return (
        <ScrollView flex={1}  showsVerticalScrollIndicator={false}>
            <Flex 
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
            >
                {
                   products && products.map((product) => (
                        <Pressable
                        onPress = {() => navigation.navigate('Single', product)}
                        key={product._id}
                        w="47%"
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        pt={0.3}
                        my={3}
                        pb={2}
                        overflow="hidden"
                        >
                            <Image 
                            source={{ uri:product.image }}
                            alt={product.name}
                            w="full"
                            h={24}
                            resizeMode="contain"
                            />
                            <Box
                            px={4}
                            pt={1}>
                                <Heading
                                size="sm"
                                bold>
                                    Rs {product.price}
                                </Heading>
                                <Text
                                fontSize={10}
                                mt={1}
                                isTruncate d
                                w="full"
                                >
                                    {product.name}
                                </Text>
                                {/* rating */}
                                <Rating value= {product.rating} />
                                <Quota quotaFill = {product.quotaFilled} quotaRequired = {product.quotaRequirement} fontsize={10} />
                            </Box>
                        </Pressable>
                    ))
                }
            </Flex>
        </ScrollView>
    );
}

export default HomeProducts;