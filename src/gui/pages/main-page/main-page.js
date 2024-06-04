import Canvas from "../../components/canvas/canvas";
import Header from "../../common/layout/header";
import LogoutButton from "../../common/logout-button/logout-button";

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
