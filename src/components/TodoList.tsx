import React from "react";
import { View, ScrollView } from "react-native";
import { TodoItem } from "./TodoItem";
import { AppText } from "./AppText";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <View className="flex-1 items-center justify-center py-20">
        <AppText size="large" color="secondary" center>
          No todos yet! 🎉
        </AppText>
        <AppText size="medium" color="tertiary" center>
          Add your first todo above
        </AppText>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
}
