import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { AppText } from "./AppText";
import { cn } from "../utils/cn";

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <View className="flex-row items-center mb-6">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add a new todo..."
        placeholderTextColor="#9CA3AF"
        className="flex-1 bg-white border-2 border-purple-200 rounded-l-lg px-4 py-3 text-base"
        onSubmitEditing={handleAdd}
      />
      <Pressable
        onPress={handleAdd}
        className={cn(
          "bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-r-lg",
          !text.trim() && "opacity-50"
        )}
        disabled={!text.trim()}
      >
        <AppText size="medium" className="text-white font-semibold">
          Add
        </AppText>
      </Pressable>
    </View>
  );
}
