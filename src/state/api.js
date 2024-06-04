import { useDispatch, useSelector } from "react-redux";
import {
  setLogin as setLoginAction,
  setPassword as setPasswordAction,
  getToken as getTokenAction,
  resetUserInfo,
} from "./redux/slices/authReducer.js";
import {
  incrementId,
  setRoom as setRoomAction,
  sendPlan as sendPlanAction,
  setPlan,
  getFlatListThunk,
  getFlatThunk,
} from "./redux/slices/planReducer.js";
import { sendRoom } from "../transport/api.js";

export function useLoginListener() {
  return useSelector((state) => state.auth.login);
}

export function useLoginDispatcher() {
  const dispatch = useDispatch();
  return (login) => dispatch(setLoginAction(login));
}

export function usePasswordListener() {
  return useSelector((state) => state.auth.password);
}

export function usePasswordDispatcher() {
  const dispatch = useDispatch();
  return (password) => dispatch(setPasswordAction(password));
}

export function useGetToken() {
  const dispatch = useDispatch();
  return (option) => dispatch(getTokenAction(option));
}

export function useTokenListener() {
  return useSelector((state) => state.auth.token);
}

export function useTokenStatusListener() {
  return useSelector((state) => state.auth.status);
}

export function useResetUserInfo() {
  const dispatch = useDispatch();
  return () => dispatch(resetUserInfo());
}

export function useGetId() {
  return useSelector((state) => state.plan.id);
}

export function useIncrementId() {
  const dispatch = useDispatch();
  return () => dispatch(incrementId());
}

export function useSendPlan() {
  const dispatch = useDispatch();
  return () => dispatch(sendPlanAction());
}

export function useRoomListener() {
  return useSelector((state) => state.plan.room);
}

export function useRoomDispatcher() {
  const dispatch = useDispatch();
  return (room) => dispatch(setRoomAction(room));
}

export function useGetArea() {
  const token = useSelector((state) => state.auth.token);
  return (length, width) => sendRoom({ token: token, length, width });
}

export function useSetPlan() {
  const dispatch = useDispatch();
  return (plan) => dispatch(setPlan(plan));
}

export function useGetFlat() {
  const dispatch = useDispatch();
  return (id) => dispatch(getFlatThunk(id));
}

export function useGetFlatList() {
  const dispatch = useDispatch();
  return () => dispatch(getFlatListThunk());
}

export function useFlatListListener() {
  return useSelector((state) => state.plan.flatList);
}
