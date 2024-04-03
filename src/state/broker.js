import { useDispatch, useSelector } from "react-redux";
import {
    setLogin as setLoginAction,
    setPassword as setPasswordAction,
    getToken as getTokenAction,
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
    return () => dispatch(getTokenAction(""));
}

export function useTokenListener() {
    return useSelector((state) => state.auth.token);
}

export function useTokenStatusListener() {
    return useSelector((state) => state.auth.status);
}

// export function useGetToken() {
//     const dispatch = useDispatch();

//     // return () => (
//     //     const getToken = async () => {
//     //         const token = await (
//     //             await import("../transport/api.js")
//     //         ).login({
//     //             username: store.getState().login,
//     //             password: store.getState().password,
//     //         });

//     //     dispatch(ACTIONS_CREATORS.UPDATE("token", token));
//     // })();

//     // function async_update() {
//     //     return (dispatch, getState) => {
//     //         (async () => {
//     //             const counterCurrent = getState().value;
//     //             const solver = new Solver();
//     //             const counterNew = await solver.solve(counterCurrent);

//     //             dispatch(ACTIONS_CREATORS.UPDATE(counterNew));
//     //         })();
//     //     };
//     // }

//     const getToken = async () => {
//         const token = await (
//             await import("../transport/api.js")
//         ).login({
//             username: store.getState().login,
//             password: store.getState().password,
//         });

//         if (token) {
//             dispatch(ACTIONS_CREATORS.UPDATE("token", token));
//             return token;
//         } else return null;
//     };

//     return async () => await getToken();
// }

// export function useTasksDispatcher() {
//     const dispatch = useDispatch();
//     return (tasks) => dispatch(ACTIONS_CREATORS.UPDATE("tasks", tasks));
// }

// export function useTasksListener() {
//     return useSelector((state) => state.tasks);
// }

// export function useTasksUpdate() {
//     const dispatch = useDispatch();

//     const update = async () => {
//         const resTasks = await (
//             await import("../transport/api.js")
//         ).getTasks({
//             token: store.getState().token,
//         });

//         console.log(resTasks);

//         if (resTasks) {
//             const taskArray = JSON.parse(resTasks).docs;
//             console.log(taskArray);
//             dispatch(ACTIONS_CREATORS.UPDATE("tasks", taskArray));
//         } else {
//             console.log("tasks is null");
//         }
//     };

//     return async () => await update();
// }

// export function useTasksAdd() {
//     const add = async () => {
//         const value1 = document.getElementById("value1").value;
//         const value2 = document.getElementById("value2").value;

//         const result = await (
//             await import("../transport/api.js")
//         ).createTask({
//             token: store.getState().token,
//             username: store.getState().login,
//             value1: value1,
//             value2: value2,
//         });

//         if (!result) {
//             console.log("create error");
//         }
//     };

//     return async () => await add();
// }
