import { Stack } from "expo-router";

const PostLayout = () => {
  return (
    // AuthProvider goes here
    <Stack 
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name="index"
      />
    </Stack>
  )
};

export default PostLayout;
