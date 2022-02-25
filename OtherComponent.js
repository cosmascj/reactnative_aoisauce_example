import { Text } from "react-native";
import { useEffect } from "react";

const OtherComponent = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <Text>Other Component</Text>;
};

export default OtherComponent;
