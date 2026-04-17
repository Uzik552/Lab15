import "./article.css";
import News from '../../components/artcomps/news/news';
import About from '../../components/artcomps/about/about';
import Contacts from '../../components/artcomps/contacts/contacts';
import Er404 from '../../components/artcomps/er404/er404';
import {Routes, Route} from "react-router-dom"


export function Article() {
    return (<div className="article">
            <Routes>
                <Route path="/" element={<News/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<Er404/>}/>
            </Routes>
    </div>);
}