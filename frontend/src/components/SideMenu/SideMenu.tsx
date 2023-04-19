import './sideMenu.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import Poland from '../../images/flags/Poland.webp';
import UK from '../../images/flags/UK.webp';
import US from '../../images/flags/US.png';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setCountry } from '../../redux/newsSlice';
import { useTranslation } from 'react-i18next';

const SideMenu = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <div className="side-menu">
      <ListGroup>
        <ListGroup.Item active>{t('COUNTRIES.1')}</ListGroup.Item>
        <Link to="/country/pl">
          <ListGroup.Item action className="country-li" onClick={() => dispatch(setCountry('pl'))}>
            <img src={Poland} alt="Poland" /> {t('Poland.1')}
          </ListGroup.Item>
        </Link>
        <Link to="/country/gb">
          <ListGroup.Item action className="country-li" onClick={() => dispatch(setCountry('gb'))}>
            <img src={UK} alt="UK" /> {t('United_Kingdom.1')}
          </ListGroup.Item>
        </Link>
        <Link to="/country/us">
          <ListGroup.Item action className="country-li" onClick={() => dispatch(setCountry('us'))}>
            <img src={US} alt="US" /> {t('United_States.1')}
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
