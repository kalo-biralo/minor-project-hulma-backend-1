import {
    Box,
    ScrollView,
    Text,
    View,
    Heading,
} from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/Orderinfo";
import{FontAwesome,FontAwesome5,Ionicons} from "@expo/vector-icons";
import OrderItems from "../Components/Orderitems";
import PlaceOrderModel from "../Components/PlaceOrderModel";

function PlaceOrderScreen(){
    return(
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    <OrderInfo 
                    title="CUSTOMER"
                    subTitle="XYZ Sharma"
                    text="admin@example.com"
                    icon={<FontAwesome name="user" size={30}color={Colors.white}/>}
                    />
                    <OrderInfo 
                    title="SHIPPING INFO"
                    subTitle="Shipping: Chitwan"
                    text="Pay Method: eSewa"
                    icon={<FontAwesome5 name="shipping-fast" size={30}color={Colors.white}/>}
                    />
                    <OrderInfo 
                    title="DELIVER TO"
                    subTitle="Address:"
                    text="ABC Shrestha, Basundhara"
                    icon={<Ionicons name="location-sharp" size={30}color={Colors.white}/>}
                    />
                </ScrollView>
            </Box>
            {/* Order Item */}
            <Box  x={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItems/>
                {/* total */}
                <PlaceOrderModel/>
            
            </Box>
        </Box>

    );
};

export default PlaceOrderScreen;