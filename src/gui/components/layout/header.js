import "./header.scss";

export default function Header(props) {
    return (
        <header>
            <span className="header-logo">
                <img src="./logo.jpg" alt="logo" className="logo" />
                <a href="/">Flat plan with cat</a>
            </span>
            <nav className="menu">{props.children}</nav>
        </header>
    );
}
