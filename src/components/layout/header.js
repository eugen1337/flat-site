import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <header>
                <img src="./logo.png" alt="logo" className="logo" />
                <h1>Планировка квартиры</h1>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
