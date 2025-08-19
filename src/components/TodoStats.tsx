import React from "react";
import { View } from "react-native";
import { AppText } from "./AppText";

type TodoStatsProps = {
  total: number;
  completed: number;
  pending: number;
};

export function TodoStats({ total, completed, pending }: TodoStatsProps) {
  if (total === 0) return null;

  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <View className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6 border border-purple-100">
      <View className="flex-row justify-between items-center mb-3">
        <AppText size="large" bold className="text-purple-800">
          Progress
        </AppText>
        <AppText size="large" bold className="text-pink-600">
          {completionRate}%
        </AppText>
      </View>

      <View className="flex-row space-x-4">
        <View className="flex-1 items-center">
          <AppText size="heading" bold className="text-purple-600">
            {total}
          </AppText>
          <AppText size="small" color="secondary">
            Total
          </AppText>
        </View>

        <View className="flex-1 items-center">
          <AppText size="heading" bold className="text-green-600">
            {completed}
          </AppText>
          <AppText size="small" color="secondary">
            Completed
          </AppText>
        </View>

        <View className="flex-1 items-center">
          <AppText size="heading" bold className="text-pink-600">
            {pending}
          </AppText>
          <AppText size="small" color="secondary">
            Pending
          </AppText>
        </View>
      </View>

      <View className="mt-3 bg-gray-200 rounded-full h-2">
        <View
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
          style={{ width: `${completionRate}%` }}
        />
      </View>
    </View>
  );
}
