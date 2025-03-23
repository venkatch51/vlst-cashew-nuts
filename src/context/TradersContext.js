import { createContext, useContext, useEffect, useState } from "react";
import apiService from "../Services/apiService";

const TradersContext = createContext({});

export const TradersProvidercontext = (props) => {
  const [details, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the contact details from the API on component mount
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await apiService();
        setContactDetails(data); // Set the API response to state
        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle errors
        setLoading(false);
      }
    };

    fetchDetails();
  }, []); // Empty dependency array ensures this runs once on mount
  const values = {
    details,
    loading,
    error,
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
