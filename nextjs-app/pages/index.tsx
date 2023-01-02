import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import homeStyles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostData } from '../lib/post'


const Home = ({allPostsData}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <>
      <Head>
        <title>Eugene</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Eugene Introduction]</p>
        <p>
          (This is a website)
        </p>
        <section className = {`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
          <h2 className = {homeStyles.headingLg}>Blog</h2>
          <ul className = {homeStyles.list}>
            {allPostsData.map(({id, title, date}) => 
            <li className = {homeStyles.listItem} key = {id}>
              <Link href = {`/posts/${id}`}>
                {title}
              </Link>
              <br/>
              <small className = {homeStyles.lightText}>
                {date}
              </small>
            </li>)}
          </ul>

        </section>
      </section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props : {
      allPostsData
    }
  }
}

