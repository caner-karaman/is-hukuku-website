import React from 'react';
import { Metadata } from 'next';
import CookiePolicyTemplate from '@/components/templates/cookie-policy/CookiePolicyTemplate';

export const metadata: Metadata = {
  title: 'Çerez Politikası | İş Hukuku - Av. Gayenur Karaman',
  description: 'Av. Gayenur Karaman İş Hukuku web sitesinde kullanılan çerezler, türleri ve yönetimi hakkında detaylı bilgi.',
};

export default function CookiePolicyPage() {
  return <CookiePolicyTemplate />;
}
