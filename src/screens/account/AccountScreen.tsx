import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";

export type MessageType = "dialogue" | "action" | "narration";

export const AccountScreen = () => {

    return (
        <Text>This is account screen. Here are details about your account.</Text>
    );
};

const styles = StyleSheet.create({
    container: { height: "100%" },
});