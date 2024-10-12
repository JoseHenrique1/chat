import { useEffect, useState } from "react";

export function useResponsiveHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth<768);
  const [contactVisible, setContactVisible] = useState(true);

  const [chatVisible, setChatVisible] = useState<"friend"|"group">("friend")

  function handleEnableContact() {
    setContactVisible(true)
  }

  function handleDisableContact() {
    setContactVisible(false)
  }

  useEffect(()=>{
    function handleResize() {
      const width = window.innerWidth;
      if (width>=768) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return {
    isMobile,
    contactVisible,
    handleEnableContact,
    handleDisableContact,
    chatVisible,
    setChatVisible
  }
  
}