import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

import { ResponsiveHomeContextProvider } from '../contexts/responsive-home-context';
import { AuthenticationContextProvider } from '../contexts/authentication-context';

export function Home() {
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
                  <div>Abra um contato e inicie uma conversa</div>
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
