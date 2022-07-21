import { useUser } from '../lib/hooks'

import Layout from '../components/layout/layout'
import Chat from '../components/chat'

const Profile = () => {
    const user = useUser({ redirectTo: '/login' })
  
    return (
      <Layout>  
        {user && (
          <div>
            <div className='text-black text-2xl font-extrabold'> Thank you! Welcome Aboard! </div>
            <div className='text-black text-xl'> Our team will be in touch with you to get started on your project ASAP!</div>
            <div className='text-black text-xl'> Currently we have: <span className='underline'>{user.email}</span> on file as your contact info</div>
            <Chat />
          </div>
        )}
      </Layout>
    )
  }
  
  export default Profile