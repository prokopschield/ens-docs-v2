import '@/styles/tailwind.css';
import 'focus-visible';

import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';

import { Layout } from '@/components/Layout';
import * as mdxComponents from '@/components/mdx';
import { useMobileNavigationStore } from '@/components/MobileNavigation';

function onRouteChange() {
    useMobileNavigationStore.getState().close();
}

Router.events.on('hashChangeStart', onRouteChange);
Router.events.on('routeChangeComplete', onRouteChange);
Router.events.on('routeChangeError', onRouteChange);

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Head>
                {router.pathname === '/' ? (
                    <title>ENS Dev Documentation</title>
                ) : (
                    <title>{`${pageProps.title} - ENS Documentation`}</title>
                )}
                <meta name="description" content={pageProps.description} />
            </Head>
            <MDXProvider components={mdxComponents}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    );
}
