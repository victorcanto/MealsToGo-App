import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider, theme } from "@infra/theme";
import { RestaurantScreen } from "@features/restaurants/screens/restaurants.screen";

import {
    useFonts as useOswaldFonts,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
    useFonts as useLatoFonts,
    Lato_400Regular,
} from "@expo-google-fonts/lato";

export default function App() {
    const [oswaldLoaded] = useOswaldFonts({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLatoFonts({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantScreen />
            </ThemeProvider>

            <ExpoStatusBar style="auto" />
        </>
    );
}
