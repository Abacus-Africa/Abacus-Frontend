import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './comingpage.scss'
import Logo from '../src/assets/images/logo.png'
import MainImg from '../src/assets/images/coming-pageimg.png'
import MsgIcon from '../src/assets/images/msgicon.png'

function App() {
  return (
    <div className="flex box-border">
      <div className="w-9/12 left-side">
        <header className='flex justify-between mt-12 mx-44 headings'>
          <div>
            <img src={Logo} alt='abacus logo'></img>
          </div>
          <div>
            <nav className="flex justify-end space-x-4 ">
              {[
                ['Home', '/'],
                ['FAQ', '/faq'],
                ['Blog', '/blog'],
              ].map(([title, url]) => (
                <a href={url} className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900">{title}</a>
              ))}
            </nav>
          </div>
        </header>

        <main className='mx-auto px-52 text-center align-center pt-24 box-border main-text'>
          <p className='text-3xl mb-14 abacu_s'><span className='text-5xl font-bold'>Abacus,</span> the Accounting Sofware to manage your business</p>
          <h1 className='m-5 font-medium text-8xl mb-14 com_ing'>Coming Soon</h1>
          <p>We'll let you know when we are launching</p>
          <div className='flex mt-5 justify-center'>
            <input type='text' className='form-input px-4 py-2 rounded-xl border-2 mr-10 w-2/4' placeholder='Your email'/>
            <input type='submit' value='Notify me' className='text-white p-2 rounded-xl notify-btn' />
          </div>
        </main>
        
        <footer className='ml-40 mt-14'>
          <h2 className='text-3xl font-bold'>Abacus</h2>
          <p className='text-xs'>As easy as it gets</p>
          <div>
            <FontAwesomeIcon icon={faTwitter} className='mr-6' />
            <FontAwesomeIcon icon={faFacebook} className='mr-6' />
            <FontAwesomeIcon icon={faLinkedinIn} className='mr-6' />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </footer>
      </div>
      <div className="flex flex-col w-3/12 coming-page-right h-screen rounded-l-2xl">
        <div className='relative'>
          <div className='absolute top-32 -left-28'>
            <img src={MainImg} alt='coming soon' className='w-5/6 h-3/6'></img>
          </div>
        </div>

        <div>
          <div className='absolute bottom-20 right-20 p-3 bg-white rounded-t-full rounded-l-full'>
            <img src={MsgIcon} alt='message icon' className='w-5'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
