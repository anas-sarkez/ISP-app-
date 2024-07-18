import { create } from "zustand";

const useStore = create<{
  balance: number;
  updateBalance: (value: number) => void;
  incBalance: (value: number) => void;
  decBalance: (value: number) => void;
}>((set) => ({
  balance: 10,
  updateBalance: (newValue: number) => set(() => ({ balance: newValue })),
  decBalance: (value: number) =>
    set((state: { balance: number }) => ({ balance: state.balance - value })),
  incBalance: (value: number) =>
    set((state: { balance: number }) => ({ balance: state.balance + value })),
}));
export default useStore;
