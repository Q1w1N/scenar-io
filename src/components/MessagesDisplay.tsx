import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Message } from "../App";
import { MessageBubble } from "./MessagesBubble";

interface MessagesDisplayProps {
  messages: Message[];
}

export const MessagesDisplay: React.FC<MessagesDisplayProps> = ({
  messages,
}) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={styles.listWrapper}>
      <FlatList
        ref={flatListRef}
        onContentSizeChange={() => {
          flatListRef.current?.scrollToEnd();
        }}
        data={messages}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <MessageBubble message={item} index={index} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
});
