"use client";

import { useSelector } from "react-redux";
import type { AppState } from "../Redux/store";
import ProgressBar from "./ProgressBar";

export default function HabitList() {
  const habits = useSelector((state: AppState) => state.habit.habits);

  return (
    <div className="space-y-6">
      {habits.map((habit: any) => (
        <div
          key={habit._id}
          className="bg-white p-4 rounded shadow space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">{habit.title}</span>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Done
            </button>
          </div>

          <ProgressBar />
        </div>
      ))}
    </div>
  );
}