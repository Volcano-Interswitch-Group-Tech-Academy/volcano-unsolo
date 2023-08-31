import { HeaderProps } from '@/helpers/types/layout';
import Head from 'next/head'



const PageHead = ({ title, description }:HeaderProps) => {
    return (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      );
}

export default PageHead;