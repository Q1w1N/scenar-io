import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { AccountScreen } from "./screens/account";
import { EditorScreen } from "./screens/editor";
import { ScenariosScreen } from "./screens/scenarios";
import { SettingsScreen } from "./screens/settings";
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";

enum ScreenName {
  Account = "Account",
  Editor = "Editor",
  Scenarios = "Scenarios",
  Settings = "Settings"
}

const Stack = createBottomTabNavigator();
const tabs = [
  {
    name: ScreenName.Account,
    activeIcon: <IconButton icon={"account"} />,
    inactiveIcon: <IconButton icon={"account"} />
  },
  {
    name: ScreenName.Editor,
    activeIcon: <IconButton icon={"message-draw"} />,
    inactiveIcon: <IconButton icon={"message-draw"} />
  }, {
    name: ScreenName.Scenarios,
    activeIcon: <IconButton icon={"folder-multiple"} />,
    inactiveIcon: <IconButton icon={"folder-multiple"} />
  }, {
    name: ScreenName.Settings,
    activeIcon: <IconButton icon={"cog"} />,
    inactiveIcon: <IconButton icon={"cog"} />
  }
];


export const App = () => {
  // const x = useNavigation();
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator sceneContainerStyle={{ paddingBottom: 90, backgroundColor: "white" }} initialRouteName={ScreenName.Scenarios} safeAreaInsets={{ top: 200 }} tabBar={(props) => <Tabbar
          defaultActiveTabIndex={2}
          tabs={tabs}
          tabBarContainerBackground='#6699ff'
          tabBarBackground='#fff'
          transitionSpeed={100}
          activeTabBackground='#6699ff'
          onTabChange={({ name }) => {
            props.navigation.navigate(name)
          }}
        />} >
          <Stack.Screen name={ScreenName.Account} component={AccountScreen} />
          <Stack.Screen name={ScreenName.Editor} component={EditorScreen} />
          <Stack.Screen name={ScreenName.Scenarios} component={ScenariosScreen} />
          <Stack.Screen name={ScreenName.Settings} component={SettingsScreen} />

        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}