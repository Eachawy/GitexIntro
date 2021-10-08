import './header.scss';

import React, { useState, useEffect } from 'react';
import { Translate, Storage, translate } from 'react-jhipster';

import { isRTL } from 'app/config/translation';


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
    <div id="app-header">
      <a className="switchLanguage" onClick={handleLocaleChange}>
        {translate('global.language')}
      </a>
    </div>
  );
};

export default Header;
