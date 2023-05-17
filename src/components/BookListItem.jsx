import React from "react";

export const BookListItem=({bookName, price, genere})=>{
    return<div>{bookName} : {genere} costs around {price}</div>
}