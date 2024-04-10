import "./header.css";

export default function Header(props) {
    return (
        <div className="header">
            <header>
                <img src="./logo.png" alt="logo" className="logo" />
                <h1>Планировка квартиры</h1>
                <nav className="menu">
                    <div className="nav-elements">
                        <a href="/">Главная</a>
                    </div>

                    {props.children}
                </nav>
            </header>
        </div>
    );
}
