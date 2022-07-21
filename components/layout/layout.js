
import BackArrow from '../navigation/backArrow'
import Link from 'next/link';

const Layout = ({
    children,
    title,
    subTitle
}) => {
    return(
      <div className='relative flex h-screen items-center bg-gradient-to-br from-nft-purple to-nft-cotton p-5 '>
          <div className='p-5 h-full rounded-md w-full bg-white grid grid-cols-1 divide-y divide-black'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
              <div className="grid grid-cols-1">
                  <div className='text-3xl row-span-1 cursor-pointer'><BackArrow/></div>
                  { !(title) || !(subTitle) &&
                    <div className="grid grid-cols-1 max-h-25 pt-2">
                      <div className=''>
                        {title && 
                          <div className='text-3xl font-bold text-center p-2'>
                            {title}
                          </div>
                        }
                        {
                          subTitle &&
                            <div className='text-base font-thin text-center p-2'>
                              {subTitle}
                            </div>
                        }
                      </div>
                    </div>
                  }
                  <div className='place-content-center p-4'>
                    {children}
                  </div>
              </div>
              <div className='invisible hidden sm:visible sm:block'>
                  <div className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 hover:from-nft-purple hover:to-nft-cotton 
                  text-9xl text-center">
                      🤖
                  </div>
              </div>
            </div>
          </div>          
      </div>
    )
}


export default Layout;