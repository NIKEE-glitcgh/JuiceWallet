import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { t } = useTranslation();

  return (
  <footer className="footer-always-light">
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        {/* Language switcher centered like the screenshot */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center text-sm text-gray-600">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-gray-600 mb-2">
            Juice is not a bank. Banking services are provided by First Century Bank, N.A., Member FDIC, pursuant to a license from Mastercard International.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            For customer service please call Juice: (855)-687-2114.
          </p>

          <div className="flex items-center justify-center gap-3 text-sm mb-4">
            <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
            <span className="text-gray-400">|</span>
            <a href="/legal" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
            <span className="text-gray-400">|</span>
            <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700">Cookie Policy</a>
            <span className="text-gray-400">|</span>
            <a href="/sitemap" className="text-blue-600 hover:text-blue-700">Sitemap</a>
          </div>

          <p className="text-sm text-gray-500">
            © 2025 Juice Financial. All rights reserved. Juice Insurance v1.3.0
          </p>
        </div>
      </div>
    </footer>
  );
}