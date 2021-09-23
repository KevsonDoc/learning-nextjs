import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';

import { InfoOutline } from '@styled-icons/evaicons-outline';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
    {/* <Wrapper>
       <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      >
      </Logo>
      <Title>Hello World</Title>
      <Description>TypeScript, ReactJS, NextJS e Styled Components</Description>
      <Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frete para uma tela com código"
      />
      
    </Wrapper> */}
    <LinkWrapper href="/about">
      <InfoOutline size={32} arial-label="About" />
    </LinkWrapper>
    <Map places={[
      {
        id: '2',
        name: 'BSB',
        slug: 'BSB',
        location: {
          latitude: -15.8101694,
          longitude: -48.0506021,
        }
      }
    ]} />
    </>
  )
}
