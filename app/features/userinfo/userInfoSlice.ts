import { createSlice } from "@reduxjs/toolkit";
export interface UserInfoState {
  username: string;
  firstName: string;
  lastName: string;
  phone: number;
  balance: number;
  packageInfo: {
    name: string;
    state: boolean;
    expirationDate: Date;
    quota: number;
    usedQuota: number;
  };
}

const initialState: UserInfoState = {
  username: "",
  firstName: "",
  lastName: "",
  phone: 0,
  balance: 0,
  packageInfo: {
    name: "",
    state: false,
    expirationDate: new Date(),
    quota: 0,
    usedQuota: 0,
  },
};
