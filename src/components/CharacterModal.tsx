import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Colors, Modal, Portal, TextInput } from "react-native-paper";
import { Actor } from "../App";

interface CharacterModalProps {
  visible: boolean;
  onDismiss: () => void;
  onAdd: (name: Actor) => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  visible,
  onDismiss,
  onAdd,
}) => {
  const [name, setName] = useState("");

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <TextInput value={name} onChangeText={setName} />
        <Button
          onPress={() =>
            onAdd({ name, color: "green", actorContext: "dialogue" })
          }
        >
          Add
        </Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    height: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
});

export default CharacterModal;
