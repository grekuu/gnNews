import './footer.scss';
import Nav from 'react-bootstrap/Nav';
import Time from '../Date/Time';
import { useAppSelector } from '../../redux/hooks';
import { getAllNews } from '../../redux/newsSlice';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const news = useAppSelector(getAllNews);
  const { t } = useTranslation();

  return (
    <Nav className="footer" activeKey="/home">
      <Nav.Item className="footer-item">
        <Time></Time>
      </Nav.Item>
      <Nav.Item className="footer-item">
        {t('Visible_number_of_articles.1')} {news.length}
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
