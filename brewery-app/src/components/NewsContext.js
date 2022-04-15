import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext(); 

export const NewsContextProvider = (props) => {
const [data, setData] = useState();
const apiKey =  "f1b4829b86c473c9be3a13f65e6db901";

   useEffect(() => {
       axios
          .get(
              `https://gnews.io/api/v4/search?q=brewery&token=${apiKey}`
              //https://gnews.io/api/v4/search?q=brewery&token=f1b4829b86c473c9be3a13f65e6db901
          )           
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
   },[]);
   

   return (
   <NewsContext.Provider value={{ data }}>
    {props.children}
    </NewsContext.Provider>
   );
};