import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'
import { useCheckToken } from '../hooks/useCheckToken'

export function Home() {
  useCheckToken();
  return (
    <div className='flex'>
      <SectionContact />
      <SectionChat />
    </div>
  )
}
