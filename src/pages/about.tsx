import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import { useRouter } from 'next/dist/client/router';
import PageTemplate from 'templates/Pages';

export default function AboutPage() {
  const router = useRouter();

  // retorna qualqer coisa
  if (router.isFallback) return null;

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES);
//   console.log(pages);

//   return {
//     props: {}
//   }
// }

// getStaticPaths
  /* Gerar URLs das páginas em build time /about /trip /petrópoles */

// getStaticProps
  /* Buscar dados da página (props) em build time - estático */

// getServerSideProps
  /* Busca dados da página (props) em run time (toda requisição) (bundle fica no server) */

// getInitialProps
  /* Busca dados da página (props) em run time (toda requisição) (bundle client) - hydrate */