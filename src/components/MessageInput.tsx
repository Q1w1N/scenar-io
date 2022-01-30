import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { Actor } from "../App";

interface MessageInputProps {
  selectedActor?: Actor;
  onSend: (value: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  selectedActor,
  onSend,
}) => {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState<string>("");

  React.useEffect(() => {
    Animated.timing(heightAnim, {
      useNativeDriver: false,
      toValue: !!selectedActor ? 150 : 0,
      duration: 100,
    }).start();
    Animated.timing(opacityAnim, {
      useNativeDriver: false,
      toValue: !!selectedActor ? 1 : 0,
      duration: 100,
    }).start();
  }, [heightAnim, opacityAnim, selectedActor]);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      keyboardVerticalOffset={0}
    >
      <Animated.View
        style={[
          {
            maxHeight: heightAnim,
            opacity: opacityAnim,
          },
          styles.inputContainer,
        ]}
      >
        <TextInput
          value={message}
          multiline={true}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
        />
        <Button
          title="Send"
          onPress={() => {
            onSend(message);
            setMessage("");
          }}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    color: "black",
    borderRadius: 15,
    maxHeight: 150,
    padding: 8,
    margin: 8,
  },
});
