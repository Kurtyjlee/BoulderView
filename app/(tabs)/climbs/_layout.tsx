import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    // AuthProvider goes here
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Climbs",
          headerTitleStyle: {
            fontSize: 30
          },
        }}
      />
    </Stack>
  )
};

export default HomeLayout;