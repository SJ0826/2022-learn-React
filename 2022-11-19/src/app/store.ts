import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // store 생성
  reducer: {
    counter: counterReducer,
  },
});

// RootState, AppDispatch 의 타입 설정
// 타입 에러를 막기 위해 스토어 설정 파일에서 직접 내보내고다른 파일로 직접가져오는 것이 안전하다.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
