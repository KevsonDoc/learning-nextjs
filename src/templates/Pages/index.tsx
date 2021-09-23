import LinkWrapper from 'components/LinkWrapper';

import { CloseOutline } from '@styled-icons/evaicons-outline';

import {
  Body,
  Content,
  Heading,
} from './styles';

const PageTemplate = () => {
  return (
    <Content>
      <LinkWrapper href="/" >
        <CloseOutline size={32}  />
      </LinkWrapper>
      <Heading>My Ttrips</Heading>
      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime nulla veniam alias nobis nesciunt minus, 
          repudiandae quam excepturi dolorum ex voluptate dolorem fuga consequatur, ea ipsam. Vel, iste laboriosam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum non, labore laborum similique velit, quis
          blanditiis esse, sed unde amet aperiam optio ratione. Exercitationem eos ut perspiciatis maxime asperiores laudantium.
        </p>
      </Body>
    </Content>
  )
}

export default PageTemplate;