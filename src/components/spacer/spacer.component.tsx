import { Theme } from "@infra/theme";
import React from "react";
import { View, Text } from "react-native";
import styled, { useTheme } from "styled-components/native";

interface SpacerProps {
    position?: keyof typeof positionVariant;
    size?: keyof typeof sizeVariant;
    children: React.ReactNode;
}

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
    xl: 4,
    xxl: 5,
};

const positionVariant = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom",
};

const getVariant = ({
    position = "top",
    size = "small",
    theme,
}: Omit<SpacerProps, "children"> & { theme: Theme }): string => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};

interface SpacerViewProps {
    variant: string;
}

const SpacerView = styled.View<SpacerViewProps>`
    ${({ variant }) => variant}
`;

export const Spacer = ({
    position = "top",
    size = "small",
    children,
}: SpacerProps) => {
    const theme = useTheme();
    const variant = getVariant({ position, size, theme });
    return <SpacerView variant={variant}>{children}</SpacerView>;
};
