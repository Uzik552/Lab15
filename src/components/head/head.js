import {Link} from "react-router-dom";
import "./head.css";


export function Head() {
    return (
        <div className="head">
            <Link to="/news"> Новасти </Link> &nbsp;
            <Link to="/contacts"> Контакты </Link>&nbsp;
            <Link to="/about"> О проекте </Link>
        </div>
    );
}

export default Head;