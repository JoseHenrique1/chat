import { SectionContact } from '../components/section-contact'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

import { ResponsiveHomeContextProvider } from '../contexts/responsive-home-context';
import { AuthenticationContextProvider } from '../contexts/authentication-context';
import { Presentation } from '../components/presentation';
import { useCheckToken } from '../hooks/useCheckToken';
import { ContactsProvider } from '../contexts/contacts-context';
import { BadgeContextProvider } from '../contexts/badge-context';
import { FriendChat } from '../components/friend-chat';
import { GroupChat } from '../components/group-chat';

export function Home() {
  useCheckToken()
  const {
    isMobile,
    contactVisible,
    handleEnableContact,
    handleDisableContact,
    chatVisible,
    setChatVisible
  } = useResponsiveHome();

  const chatComponent = chatVisible == 'friend'? <FriendChat/>: <GroupChat/>;
  const mobileComponent = contactVisible ? <SectionContact /> : chatComponent;

  return (
    <AuthenticationContextProvider>
      <ContactsProvider>
        <BadgeContextProvider>
          <ResponsiveHomeContextProvider
            handleDisableContact={handleDisableContact}
            handleEnableContact={handleEnableContact}
            chatVisible={chatVisible}
            setChatVisible={setChatVisible}
          >
            <div className='flex authImage'>
              {isMobile && mobileComponent}
              {
                !isMobile && <>
                  <SectionContact />
                  {contactVisible ?
                    <Presentation /> : chatComponent
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
