import { create } from "zustand";

type Notification = { title: string; body: string; _id: string };

type Store = {
  notifications: Notification[];
  updateNotification: (newValue: Notification[]) => void;
};

const useStore = create<Store>((set) => ({
  notifications: [],
  updateNotification: (newValue) => {
    set({ notifications: newValue });
  },
}));

export default useStore;
