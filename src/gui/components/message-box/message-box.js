import "./style.scss";

export default function MessageBox(props) {
    return (
        <>
            <br />
            <span className="message-box">
                <label className="message-header">Messages</label>
                <span className="message">
                    <label>test message</label>
                </span>
                <span className="message">
                    <label>{props.message}</label>
                </span>
            </span>
        </>
    );
}
