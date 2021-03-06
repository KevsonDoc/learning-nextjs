import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  color: pointer;

  svg {
    transition: color .3 ease-in-out;
  }

  svg:hover {
    color: var(--highlight);
  }
`