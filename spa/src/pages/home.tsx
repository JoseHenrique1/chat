import { SectionContact } from '../components/section-contact'
import { SectionChat } from '../components/section-chat'

export function Home() {
  return (
    <div className='flex'>
      <SectionContact />
      <SectionChat />
    </div>
  )
}
