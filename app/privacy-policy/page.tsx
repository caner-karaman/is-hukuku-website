import React from 'react';
import { Metadata } from 'next';
import PrivacyPolicyTemplate from '@/components/templates/privacy-policy/PrivacyPolicyTemplate';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | İş Hukuku - Av. Gayenur Karaman',
  description: 'Av. Gayenur Karaman İş Hukuku web sitesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyTemplate />;
}
