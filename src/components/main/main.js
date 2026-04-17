import "./main.css"
import {Section} from "../../mcomps/section/section";
import {Article} from "../../mcomps/article/article";
import {Aside} from "../../mcomps/aside/aside";

export function Main() {
    return (
        <div className="main">
            <Section />
            <Article />
            <Aside />

        </div>
    );
}