import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider, theme } from "@infra/theme";
import { RestaurantScreen } from "@features/restaurants/screens/restaurants.screen";

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
               <Text>Screens...</Text>
            </ThemeProvider>

            <ExpoStatusBar style="auto" />
        </>
    );
}
