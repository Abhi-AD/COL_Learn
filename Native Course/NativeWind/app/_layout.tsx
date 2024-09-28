import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Index" />
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="Contact" />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
  );
};

export default RootLayout;

/*
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Index"
        options={{
          headerTitle: "Index Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: "Home Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
      <Stack.Screen
        name="About"
        options={{
          headerTitle: "About Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
      <Stack.Screen
        name="Contact"
        options={{
          headerTitle: "Contact Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
      <Stack.Screen
        name="users/[id]"
        options={{
          headerTitle: "User Page",
          headerStyle: {
            backgroundColor: "crimson",
          },
        }}
      />
    </Stack>
  );
};

export default RootLayout;
*/
