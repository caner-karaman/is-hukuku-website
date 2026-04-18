"use client";

import React from "react";
import { useToast } from "./ToastContext";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

interface ToastProps {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  const bgColor = {
    success: "bg-surface-container-highest/80 border-emerald-500/50",
    error: "bg-surface-container-highest/80 border-rose-500/50",
    info: "bg-surface-container-highest/80 border-blue-500/50",
  }[type];

  const textColor = {
    success: "text-emerald-500",
    error: "text-rose-500",
    info: "text-blue-500",
  }[type];

  const icon = {
    success: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  }[type];

  return (
    <div
      className={`
        pointer-events-auto
        flex items-center gap-4 px-6 py-4 rounded-xl border
        backdrop-blur-xl shadow-2xl
        animate-in slide-in-from-right-full fade-in
        duration-300 ease-out
        ${bgColor}
      `}
    >
      <div className={textColor}>{icon}</div>
      <p className="font-sans text-sm font-medium text-on-surface">
        {message}
      </p>
      <button
        onClick={onClose}
        className="ml-auto text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
