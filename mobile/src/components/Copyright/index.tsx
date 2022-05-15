import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Developed by Nuno Ferraz</Text>
    </View>
  );
}
