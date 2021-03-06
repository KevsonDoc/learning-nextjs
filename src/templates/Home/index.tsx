import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import dynamic from 'next/dynamic';

import { InfoOutline } from '@styled-icons/evaicons-outline';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places } : MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} arial-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
