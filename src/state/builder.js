import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default () => {
    return (props) => {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {props.children}
                </PersistGate>
            </Provider>
        );
    };
};
