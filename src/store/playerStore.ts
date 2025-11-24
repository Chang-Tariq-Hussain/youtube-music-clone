// src/store/playerStore.ts
import { create } from "zustand";
import type { YoutubeVideo } from "../types/videoTypes";

interface PlayerState {
  currentTrack: YoutubeVideo | null;
  queue: YoutubeVideo[];
  isPlaying: boolean;
  isMiniplayer: boolean;
  volume: number;
  progress: number;

  // Actions
  playTrack: (track: YoutubeVideo, newQueue?: YoutubeVideo[]) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  toggleMiniplayer: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,
  isMiniplayer: true,
  volume: 0.7,
  progress: 0,

  playTrack: (track: YoutubeVideo, newQueue = []) =>
    set({
      currentTrack: track,
      queue: newQueue.length > 0 ? newQueue : get().queue,
      isPlaying: true,
      isMiniplayer: true,
    }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  nextTrack: () => {
    const { queue, currentTrack } = get();
    if (!currentTrack) return;

    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % queue.length; // Loop to start
    const nextTrack = queue[nextIndex];

    if (nextTrack) {
      get().playTrack(nextTrack);
    }
  },

  prevTrack: () => {
    const { queue, currentTrack } = get();
    if (!currentTrack) return;

    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
    const prevTrack = queue[prevIndex];

    if (prevTrack) {
      get().playTrack(prevTrack);
    }
  },

  toggleMiniplayer: () =>
    set((state) => ({ isMiniplayer: !state.isMiniplayer })),

  setVolume: (volume) => set({ volume }),

  setProgress: (progress) => set({ progress }),
}));
