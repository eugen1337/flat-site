import { useDispatch, useSelector } from "react-redux";
import {
    setLogin as setLoginAction,
    setPassword as setPasswordAction,
    getToken as getTokenAction,
    resetUserInfo,
} from "../redux/slices/authReducer.js";
import store from "../redux/store.js";

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
