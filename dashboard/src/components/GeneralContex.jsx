import React, { useState ,createContext} from "react";
import BuyActionWindow from "./BuyActionWindow";


const GeneralContext = createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedOrderMode, setSelectedOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (uid, mode = "BUY") => {
    console.log("openBuyWindow called with uid:", uid); // Debug log
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedOrderMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} user={props.user} mode={selectedOrderMode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
