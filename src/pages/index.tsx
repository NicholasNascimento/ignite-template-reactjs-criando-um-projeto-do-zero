import { GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import Link from 'next/link';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  <>
    <main className={commonStyles.container}>
      <Header />

      <div className={styles.posts}>
        <Link href="/">
          <a className={styles.post}>
            <strong>Algum título</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <FiCalendar />
                15 Mar 2021
              </li>
              <li>
                <FiUser />
                Nicholas Nascimento
              </li>
            </ul>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.post}>
            <strong>Algum título</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <FiCalendar />
                15 Mar 2021
              </li>
              <li>
                <FiUser />
                Nicholas Nascimento
              </li>
            </ul>
          </a>
        </Link>

        <button type="button">Carregar mais posts</button>
      </div>
    </main>
  </>
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
