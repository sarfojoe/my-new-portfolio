import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CreditCard from "../components/CreditCard";

function Credits() {

    const [credits, setCredits] = useState([]);

    useEffect(() => {
        API.getCredits()
            .then(res => {
                setCredits(res);
            })
            .catch(err => {
                console.log("Something went wrong while fetching credits...", err);
            })
    }, []);

    let id = 0;

    return (
        <div className="container">
            <h2 className="uk-text-center">Credits</h2>
            <div className="uk-flex uk-flex-column uk-flex-middle">
                {
                    credits && credits.length > 0 ? (
                        credits.map(credit => {
                            id += 1;
                            return <CreditCard
                                key={id}
                                text={credit.text}
                                link={credit.link}
                            />
                        })
                    ) : ""
                }
            </div>
        </div>
    );
}

export default Credits;