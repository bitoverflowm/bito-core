
import BackArrow from '../navigation/backArrow'

const Layout = ({
    children,
    title = 'Sign Up',
    subTitle
}) => (
    <>
        <div className='relative flex h-screen items-center bg-gradient-to-br from-nft-purple to-nft-cotton p-5 '>
          <div className='p-5 h-full rounded-md w-full bg-white grid grid-cols-1 divide-y divide-black'>
            <div className="grid grid-cols-1 max-h-12 pt-2">
                <div className='text-3xl p-2'><BackArrow/></div>
                <div className=''>
                  <div className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-6xl text-center">
                    🤖
                  </div>
                  <div className='text-3xl font-bold text-center p-2'>
                    {title}
                  </div>
                  <div className='text-base font-thin text-center p-2'>
                    {subTitle}
                  </div>
                </div>
            </div>
            <div className='flex place-content-center p-4'>
              {children}
            </div>
          </div>          
        </div>
    </>
)


export default Layout;