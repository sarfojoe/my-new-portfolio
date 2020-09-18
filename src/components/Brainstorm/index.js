import React from "react";
import "./brainstorm.css";

export default function Brainstorm({ name, notes, words, combinations }) {
    return (
        <div className="brainstorm uk-flex uk-flex-column">
            <div className="description">
                <h5>{name}</h5>
                <ul>
                    {
                        notes.map(note => (
                            <li key={note}>{note}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="uk-flex uk-flex-around uk-flex-wrap uk-width-100">
                {
                    words ? words.map(item => (
                        <div key={item.word} className="word uk-text-center">
                            <h6>{item.word}</h6>
                            <ul>
                                {
                                    item.graphics.map(graphic => (
                                        <li key={graphic}>{graphic}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )) : ""
                }
                {
                    combinations ? (
                        <div className="word possible-combos uk-text-center">
                            <h6>possible combinations</h6>
                            <ul>
                                {
                                    combinations.map(items => (
                                        <li key={items.join("")}>{items.join(" + ")}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}
