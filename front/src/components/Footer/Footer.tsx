import cx from 'classnames/bind';

const Footer = () => {
  return (
    <footer className={cx('bg-dark', 'py-3', 'text-white', 'text-center')}>
      2022 | Coded by{' '}
      <a
        href="https://contelautaro.com.ar/"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        &copy; Lautaro Conte
      </a>
    </footer>
  );
};

export default Footer;
