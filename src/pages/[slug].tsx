import client from 'graphql/client';
import {
  GET_PAGE_BY_SLUG,
  GET_PAGES,
} from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';

export default function Page({ heading, body } : PageTemplateProps) {
  const router = useRouter();

  // retorna qualqer coisa
  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, { slug: `${params?.slug}`});

  if (!page) return { notFound: true } 
  return {
    props: {
      heading: page.heading,
      body: page.body.html 
    }
  }
}

// getStaticPaths
  /* Gerar URLs das páginas em build time /about /trip /petrópoles */

// getStaticProps
  /* Buscar dados da página (props) em build time - estático */

// getServerSideProps
  /* Busca dados da página (props) em run time (toda requisição) (bundle fica no server) */

// getInitialProps
  /* Busca dados da página (props) em run time (toda requisição) (bundle client) - hydrate */