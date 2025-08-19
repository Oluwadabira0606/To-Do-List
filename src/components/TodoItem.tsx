import React from "react";
import { View, Pressable } from "react-native";
import { AppText } from "./AppText";
import { cn } from "../utils/cn";

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <View className="flex-row items-center justify-between bg-white rounded-lg p-4 mb-3 shadow-sm border border-purple-100">
      <Pressable
        onPress={() => onToggle(id)}
        className="flex-row items-center flex-1"
      >
        <View
          className={cn(
            "w-6 h-6 rounded-full border-2 mr-3 items-center justify-center",
            completed ? "bg-purple-500 border-purple-500" : "border-pink-300"
          )}
        >
          {completed && (
            <AppText
              size="small"
              color="primary"
              className="text-white font-bold"
            >
              ✓
            </AppText>
          )}
        </View>
        <AppText
          size="medium"
          className={cn("flex-1", completed && "line-through text-gray-400")}
        >
          {text}
        </AppText>
      </Pressable>

      <Pressable
        onPress={() => onDelete(id)}
        className="ml-3 p-2 rounded-full bg-pink-100"
      >
        <AppText size="small" color="secondary" className="text-pink-600">
          ×
        </AppText>
      </Pressable>
    </View>
  );
}
