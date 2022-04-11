import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext(); 

export const NewsContextProvider = (props) => {
const [data, setData] = useState([]);
const apiKey =  "394f221df9fd46608350a92c306ec120";

   useEffect(() => {
       axios
          .get(
              `https://newsapi.org/v2/everything?q=tesla&from=2022-03-11&sortBy=publishedAt&apiKey=394f221df9fd46608350a92c306ec120`
          )          (parameter) `response`; AxiosResponse<any>
          then((response) => setData(response.data()))
          .catch((error) => console.log(error));
   },[data]);
   

   return (
   <NewsContext.Provider value={{ data }}>
    {props.children}
    </NewsContext.Provider>
   );
};