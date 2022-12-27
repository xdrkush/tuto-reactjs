import "./List.css"
import Card from "./Card";
import { useState } from "react";

export default function List() {
    const [listCourses] = useState([
        { id: 1, name: "title 1", description: "ma super description de fou !" },
        { id: 2, name: "title 2", description: "ma super description de fou !" },
        { id: 3, name: "title 3", description: "ma super description de fou !" }
    ])

    return (
        <div className="List container">

            <h2> List </h2>
            <p>Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor;  </p>

            <div className="row justify-around">
                {
                    listCourses.length > 0 && listCourses.map((itm, i) => {
                        return <Card key={i} item={itm} />
                    })
                }
            </div>

        </div>
    );
}
