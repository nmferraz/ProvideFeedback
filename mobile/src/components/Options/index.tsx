import React from "react";
import { Text, View } from "react-native";
import { Copyright } from "../Copyright";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { styles } from "./styles";
import { Option } from "../Option";
import { FeedbackType } from "../Widget";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave your feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            key={key}
            title={value.title}
            image={value.image}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
