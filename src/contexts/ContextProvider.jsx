import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [animationEffect, setAnimationEffect] = useState(false);
  const [chatAnimationEffect, setChatAnimationEffect] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (e) => {
    setCurrentColor(e);
    localStorage.setItem("colorMode", e);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [clicked]: !prevState[clicked],
    }));
  };

  const handleAnimationClick = () => {
    setAnimationEffect((prev) => !prev);
    handleClick();
  };

  const handleChatAnimationClick = () => {
    setChatAnimationEffect((prev) => !prev);
    handleClick();
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
        initialState,
        animationEffect,
        handleAnimationClick,
        handleChatAnimationClick,
        chatAnimationEffect,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
