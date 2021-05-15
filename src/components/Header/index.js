import Notificacao from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import Badge from '@material-ui/core/Badge';
import avatar from '../../assets/dummy-avatar.jpg'

import './styles.css';
export default function Header(){
  /* const defaultProps = {
    color: 'secondary' as 'secondary',
    children: <MailIcon />,
  }; */
  return(
    <div className="header">
      <div className="info">
      <Badge badgeContent={4} max={3} color="error">
        <span><Notificacao /></span>
      </Badge>
      <Badge badgeContent={7} color="error">
        <span><EmailIcon /></span>
      </Badge>
        
      </div>
      <div className="user">
        <span>Walter White</span>
        <img src={avatar} alt="avatar" className="user-avatar"/>
      </div>
    </div>
    
  );
}