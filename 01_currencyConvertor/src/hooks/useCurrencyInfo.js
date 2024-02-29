import React, { useEffect, useState } from "react";
import axios from "axios";

const useCurrencyInfo = (currency) => {
    const [data,setData]=useState({})
  useEffect(() => {
    axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((res)=>{
        setData(res.data[currency])
    })
  }, [currency]);
  return data
};

export default useCurrencyInfo;
