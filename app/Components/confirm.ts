import { Alert } from "react-native";

export const confirm = (title: string, message: string | undefined) =>
  new Promise((resolve) =>
    Alert.alert(title, message, [
      {
        style: "default",
        text: "OK ✔️",
        onPress: () => {
          resolve(true);
        },
        isPreferred: true,
      },

      {
        style: "destructive",
        text: "Cancel ❌",
        onPress: () => resolve(false),
      },
    ])
  );

//   {
//     style: "destructive",
//     text: "Delete",
//     onPress: () => {},
//   },
