import Canvas from "../components/canvas/canvas";
import Header from "../components/layout/header";
import LogoutButton from "../components/logout-button/logout-button";

export default function MainPage() {
    return (
        <>
            <Header>
                <LogoutButton></LogoutButton>
            </Header>
            <Canvas></Canvas>
        </>
    );
}
