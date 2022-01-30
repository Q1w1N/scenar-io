import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import CharacterModal from "./components/CharacterModal";
import CharactersRooster from "./components/CharactersRooster";
import { MessageInput } from "./components/MessageInput";
import { MessagesDisplay } from "./components/MessagesDisplay";

export type MessageType = "dialogue" | "action" | "narration";

export type Actor = {
  // id: number;
  name: string;
  actorContext: MessageType;
  color: string;
};

export type Message = {
  // id: number;
  type: MessageType;
  content: string;
  owner: Actor;
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [actors, setActors] = useState<Actor[]>([]);

  const [selectedActor, setSelectedActor] = useState<Actor | undefined>(
    undefined
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <CharacterModal
        onDismiss={() => setModalVisible(false)}
        visible={modalVisible}
        onAdd={(owner: Actor) => setActors([...actors, owner])}
      />
      <MessagesDisplay messages={messages} />
      <View style={{ flexDirection: "row" }}>
        <IconButton
          style={{
            width: 60,
            height: 60,
            backgroundColor: "yellow",
            borderRadius: 5,
          }}
          icon="exclamation"
          onPress={() =>
            selectedActor?.actorContext === "action"
              ? setSelectedActor(undefined)
              : setSelectedActor({
                  actorContext: "action",
                  color: "yellow",
                  name: "Action",
                })
          }
        />
        <IconButton
          style={{
            width: 60,
            height: 60,
            backgroundColor: "teal",
            borderRadius: 5,
          }}
          icon="plus"
          onPress={() => setModalVisible(true)}
        />
        <CharactersRooster actors={actors} selectActor={setSelectedActor} />
      </View>
      <MessageInput
        selectedActor={selectedActor}
        onSend={(newMessage) =>
          setMessages([
            ...messages,
            {
              type: selectedActor!.actorContext,
              owner: selectedActor!,
              content: newMessage,
            },
          ])
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%" },
});

export default App;
