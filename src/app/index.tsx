import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { AppText } from "@/components/AppText";
import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";
import { TodoStats } from "@/components/TodoStats";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function IndexScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50">
      <View className="flex-1 p-4">
        {/* Header */}
        <View className="items-center mb-8">
          <AppText size="heading" bold className="text-purple-800 mb-2">
            ✨ Todo List
          </AppText>
          <AppText size="medium" color="secondary" center>
            Stay organized and productive
          </AppText>
        </View>

        {/* Input */}
        <TodoInput onAdd={addTodo} />

        {/* Stats */}
        <TodoStats
          total={todos.length}
          completed={completedCount}
          pending={pendingCount}
        />

        {/* Todo List */}
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </View>
    </SafeAreaView>
  );
}
