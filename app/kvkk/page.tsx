import React from 'react';
import { Metadata } from 'next';
import KVKKTemplate from '@/components/templates/kvkk/KVKKTemplate';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | İş Hukuku - Av. Gayenur Karaman',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Av. Gayenur Karaman tarafından hazırlanan aydınlatma metni.',
};

export default function KVKKPage() {
  return <KVKKTemplate />;
}
