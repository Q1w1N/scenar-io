import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export type MessageType = "dialogue" | "action" | "narration";

export const SettingsScreen = () => {

    return (
        <Text>Here are settings. Things like themes etc.</Text>
    );
};

const styles = StyleSheet.create({
    container: { height: "100%" },
});