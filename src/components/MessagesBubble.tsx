import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Message } from "../App";

interface MessageBubbleProps {
  message: Message;
  index: number;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  index,
}) => {
  const positioning: ViewStyle = {
    alignSelf: index % 2 ? "flex-start" : "flex-end",
  };

  return (
    <View
      style={{
        flexDirection: index % 2 ? "row" : "row-reverse",
        alignSelf: positioning.alignSelf,
      }}
    >
      <Text>{message.owner.name}</Text>
      <View
        style={[
          { backgroundColor: message.owner.color },
          positioning,
          styles.bubbleWrapper,
        ]}
      >
        <Text style={styles.bubbleText}>{message.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleWrapper: {
    padding: 15,
    borderRadius: 69,
  },
  bubbleText: {
    fontSize: 18,
  },
});
