import Logo from '../../assets/logo.png'
import "./Header.scss";

function Header() {

  return (
    <>
    <div className='header'>
        <img src={Logo} className='logo' alt="Logo Rick and Morty" />
    </div>
    </>
  )
}

export default Header
