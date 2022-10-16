import React, { useEffect, useState } from "react";
import { FlatList, Platform, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { restaurantsMock } from "@utils/mocks/restaurants.mock";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "@components/spacer/spacer.component";
import { Restaurant } from "@interfaces/restaurants.interface";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar value={"search"} placeholder="Search" />
            </SearchContainer>

            <FlatList
                data={restaurantsMock}
                renderItem={({ item }) => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard restaurant={item} />
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};
