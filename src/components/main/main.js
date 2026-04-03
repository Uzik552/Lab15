import "./main.css"
import {Section} from "../footer/mcomps/section/section";
import {Article} from "../footer/mcomps/article/article";
import {Aside} from "../footer/mcomps/aside/aside";

export function Main() {
    return (
        <div className="main">
            <Section />
            <Article />
            <Aside />

        </div>
    );
}