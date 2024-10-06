import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

import { ResponsiveHomeContextProvider } from '../contexts/responsive-home-context';
import { AuthenticationContextProvider } from '../contexts/authentication-context';
import { Presentation } from '../components/presentation';
import { useCheckToken } from '../hooks/useCheckToken';

export function Home() {
  useCheckToken()
  const {
    isMobile,
    contactVisible,
    handleEnableContact,
    handleDisableContact
  } = useResponsiveHome();

  const mobileComponent = contactVisible ? <SectionContact /> : <SectionChat />;

  return (
    <AuthenticationContextProvider>
      <ResponsiveHomeContextProvider
        handleDisableContact={handleDisableContact}
        handleEnableContact={handleEnableContact}
      >
        <div className='flex authImage'>
          {
            isMobile && mobileComponent
          }
          {
            !isMobile && <>
              <SectionContact />
              {
                contactVisible ?
                  <Presentation />
                  :
                  <SectionChat />
              }
            </>
          }
        </div>
      </ResponsiveHomeContextProvider>
    </AuthenticationContextProvider>
  )
}
