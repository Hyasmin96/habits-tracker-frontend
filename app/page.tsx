"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHabitsThunk } from "@/features/habit/habitSlice";
import type { AppState, AppDispatch } from "../Redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const habits = useSelector((state: AppState) => state.habit.habits);

  useEffect(() => {
    dispatch(fetchHabitsThunk());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Título en negritas y más grande */}
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
        Habits
      </h2>

      {/* Lista de hábitos con viñetas */}
      {habits.length === 0 ? (
        <p>No hay hábitos disponibles</p>
      ) : (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: "1.6", color: "#333" }}>
          {habits.map((habit, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {habit.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}