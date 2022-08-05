// ##########     LIBRARIES    ############### //
import React, { useContext, useState } from 'react';

export const IsVIPContext = React.createContext({
  isVIP: false,
  toggleIsVIP: () => {},
});

export const IsVIPProvider = ({ children }) => {
  const [isVIP, setIsVIP] = useState(false);

  const toggleIsVIP = () => setIsVIP(!isVIP);
  return <IsVIPContext.Provider value={{ isVIP, toggleIsVIP }}>{children}</IsVIPContext.Provider>;
};

const useIsVIP = () => useContext(IsVIPContext);

export default useIsVIP;
