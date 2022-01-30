import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Actor } from "../App";

interface CharactersRoosterProps {
  actors: Actor[];
  selectActor: (actor: Actor) => void;
}

const CharactersRooster: React.FC<CharactersRoosterProps> = ({
  actors,
  selectActor,
}) => {
  const [name, setName] = useState("");

  return (
    <FlatList
      data={actors}
      horizontal
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item, index }) => (
        <Button
          color={"white"}
          style={[{ backgroundColor: item.color }, styles.actorButton]}
          onPress={() => selectActor(item)}
        >
          {item.name}
        </Button>
      )}
    />
  );
};

const styles = StyleSheet.create({
  actorButton: {
    width: 60,
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: 6,
  },
});

export default CharactersRooster;
