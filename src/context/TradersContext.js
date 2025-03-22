import { createContext, useContext } from "react";

const TradersContext = createContext({});

const details = [
  {
    propName:"G.D.S.Sai Prasad",
    companyName:"venkatalalithasaitraders",
    GSTIN:"37ATFPG2591JIZH",
    website:"https://venkatalalithasaitraders.netlify.app/",
    gmail:"venkatalalithasaitraders@gmail.com",
    address:"Door No 21-156 Town Road PAYAKARAOPETA, Payakaraopeta(M), Anakapalli Dist, (A.P)."
  }
];

export const TradersProvidercontext = (props) => {
  let values = {
    details,
  };
  return (
    <TradersContext.Provider value={values}>
      {props.children}
    </TradersContext.Provider>
  );
};

export const useTradersContext = () => {
  return useContext(TradersContext);
};
