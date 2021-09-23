import Link from 'next/link';

import { Wrapper } from './styles';

type LinkWrapper = {
  href: string;
  children: React.ReactNode
}

const LinkWrapper = ({ href, children} : LinkWrapper) => {
  return (
    <Wrapper>
      <Link href={href}>
        {children}
      </Link>
    </Wrapper>
  )
}

export default LinkWrapper;