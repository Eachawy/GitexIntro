import React, { useState, useEffect } from 'react';
import { Translate, Storage, translate } from 'react-jhipster';

import { isRTL } from 'app/config/translation';
import { Link } from 'react-router-dom';


export interface IHeaderProps {
  currentLocale: string;
  onLocaleChange: Function;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => document.querySelector('html').setAttribute('dir', isRTL(Storage.session.get('locale')) ? 'rtl' : 'ltr'));

  const handleLocaleChange = event => {
    const sessionLocale = Storage.session.get('locale');
    const langKey = sessionLocale === 'en' || typeof sessionLocale === 'undefined' ? 'ar' : 'en';
    Storage.session.set('locale', langKey);
    props.onLocaleChange(langKey);
    document.querySelector('html').setAttribute('dir', isRTL(langKey) ? 'rtl' : 'ltr');
  };

  return (
    <header>
      <div className="logos">
        <div className="RTA" />
        <div className="Dubai" />
      </div>
      <div className="menu">
        <Link to={'/'} className="home" />
        <div className="switchLanguage" onClick={handleLocaleChange}>
          {translate('global.language')}
        </div>
      </div>


    </header>
  );
};

export default Header;
