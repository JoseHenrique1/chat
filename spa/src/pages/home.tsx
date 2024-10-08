import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

import { ResponsiveHomeContextProvider } from '../contexts/responsive-home-context';
import { AuthenticationContextProvider } from '../contexts/authentication-context';
import { Presentation } from '../components/presentation';
import { useCheckToken } from '../hooks/useCheckToken';
import { ContactsProvider } from '../contexts/contacts-context';
import { BadgeContextProvider } from '../contexts/badge-context';

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
      <ContactsProvider>
        <BadgeContextProvider>
          <ResponsiveHomeContextProvider
            handleDisableContact={handleDisableContact}
            handleEnableContact={handleEnableContact}
          >
            <div className='flex authImage'>
              {isMobile && mobileComponent}
              {
                !isMobile && <>
                  <SectionContact />
                  {contactVisible ?
                    <Presentation /> : <SectionChat />
                  }
                </>
              }
            </div>
          </ResponsiveHomeContextProvider>
        </BadgeContextProvider>
      </ContactsProvider>
    </AuthenticationContextProvider>
  )
}
