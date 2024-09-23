import { useEffect, useState } from "react";

export function useResponsiveHome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth<768);
  const [contactVisible, setContactVisible] = useState(true);

  function handleEnableContact() {
    isMobile && setContactVisible(true)
  }

  function handleDisableContact() {
    isMobile && setContactVisible(false)
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
    handleDisableContact
  }
  
}