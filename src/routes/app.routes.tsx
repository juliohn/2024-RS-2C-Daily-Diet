import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Summary } from "@screens/Summary";
import { Details } from "@screens/Details";
import { New } from "@screens/New";
import { Edit } from "@screens/Edit";
import { FinishMessage } from "@screens/FinishMessage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="summary" component={Summary} />
      <Screen name="details" component={Details} />
      <Screen name="new" component={New} />
      <Screen name="edit" component={Edit} />
      <Screen name="finish" component={FinishMessage} />
    </Navigator>
  );
}
