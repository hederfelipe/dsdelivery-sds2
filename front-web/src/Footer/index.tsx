import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedingIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer(){
    return(
    <footer className="main-footer">
      Desenvolvido por HEDER TECH
      <div className="footer-icons">
        <a href="www.youtube.com" target="_new"><YoutubeIcon/></a>
        <a href="www.linkeding.com" target="_new"><LinkedingIcon/></a>
        <a href="www.instagram.com" target="_new"><InstagramIcon/></a>
      </div>
    </footer>
    );
}
export default Footer;