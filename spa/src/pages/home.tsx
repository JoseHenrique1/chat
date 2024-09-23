import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useCheckToken } from '../hooks/useCheckToken'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

import { ResponsiveHomeContextProvider } from '../contexts/responsive-home-context';

export function Home() {
  //Verifica se o usuario possui um token
  useCheckToken();

  const { 
    isMobile, 
    contactVisible, 
    handleEnableContact,
    handleDisableContact
  } = useResponsiveHome();

  const mobileComponent = contactVisible ? <SectionContact /> : <SectionChat />;

  return (
    <ResponsiveHomeContextProvider
      handleDisableContact={handleDisableContact}
      handleEnableContact={handleEnableContact}
    >
      <div className='flex'>
        {
          isMobile && mobileComponent
        }
        {
          !isMobile && <>
            <SectionContact />
            <SectionChat />
          </>
        }
      </div>
    </ResponsiveHomeContextProvider>
  )
}
