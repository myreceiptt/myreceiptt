import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyReceipt: Initialization Page!</title>
        <link rel="icon" href="/1.21.jpeg" />
        <link rel="apple-touch-icon" href="/1.21.jpeg" />
        <link rel="shortcut icon" href="/1.21.jpeg" />
        <meta
          name="description"
          content="The init page initializes and controls processes. Its primary role is to start processes based on records read from the MyReceipt files. MyReceipt files usually requests that the init command run the getty command for each line on which process can log in."
        />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="https://www.straight-line.org" target='_blank'>MyReceipt</a> <code>init</code> Page!
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://init.straight-line.org/" className={styles.card}>
            <h3>Initialization Page &rarr;</h3>
            <p>Start processes based on records read from the <a href="https://www.straight-line.org" target='_blank'>MyReceipt</a> files.</p>
          </a>

          <a href="https://prompt.straight-line.org/" className={styles.card} target='_blank'>
            <h3>Console Prompts &rarr;</h3>
            <p>A window in which the text-mode programs are active.</p>
          </a>

          <a
            href="https://deeplinks.straight-line.org/" className={styles.card} target='_blank'
          >
            <h3>The Deep Links &rarr;</h3>
            <p>Does not facilitate the access to or use of the links.</p>
          </a>

          <a
            href="https://iqraa.straight-line.org/"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
