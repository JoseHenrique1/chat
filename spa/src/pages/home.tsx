import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useCheckToken } from '../hooks/useCheckToken'
import { useResponsiveHome } from '../hooks/useResponsiveHome';

export function Home() {
  useCheckToken();

  const { isMobile, contactVisible } = useResponsiveHome();

  const mobileComponent = contactVisible? <SectionContact /> : <SectionChat />;
  
  return (
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
  )
}
