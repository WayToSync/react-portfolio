import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { skillsApi } from '../features/skillData/skilApi';
export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(skillsApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
