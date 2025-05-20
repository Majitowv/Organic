import React from 'react';
import { Link } from 'react-router-dom';
import "./MainCategory.scss";

const MainCategory = () => {
    const allCategories = [
        {
            id: 1,
            title: "Vegetable",
            img: "https://media.sketchfab.com/models/a8fd600ae7c544f08f8b1566e4a1e1ce/thumbnails/0e7e549203904ff6b00c55ff647f100a/a295cada0d7549b98b98ed774c64feb1.jpeg",
        },
        {
            id: 2,
            title: "Fresh",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwjESO4kyld8HyGWZL7XVUheASV95-Tl9iw&s",
        },
        {
            id: 3,
            title: "Nuts",
            img: "https://media.istockphoto.com/id/1502932980/photo/mixed-nuts-in-bowl-mix-of-various-nuts-on-colored-background-pistachios-cashews-walnuts.jpg?s=612x612&w=0&k=20&c=nANdvXtpTLTX3_CiHN9OHDh_9QRB6YwZ95cdC1CeU4k=",
        },
        {
            id: 4,
            title: "Health",
            img: "https://restoranoff.ru/upload/iblock/320/grechnevaya_krupa.jpg",
        },
        {
            id: 5,
            title: "Millets",
            img: "https://media.istockphoto.com/id/1096039106/photo/millet-groats-in-spoon-above-bowl-top-view.jpg?s=612x612&w=0&k=20&c=An8LgpCXIzEg99-RPL76CpIj70h-Ks5uaIZ-rYHVRjA=",
        }
    ];

    

    return (
        <div id='maincategory'>
            <div className="container">
                <h1>All Categories</h1>
                <div className="maincategory">
                    {
                        allCategories.map((el) => (
                            <div className="maincategory--block" key={el.id}>
                                <Link to={`/category/${el.title.toLowerCase()}`}> 
                                    <img src={el.img} alt="img" />
                                </Link>
                                <h1>{el.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MainCategory;
