import Head from "next/head"
import Layout from "../components/Layout"
import HomeHero from "../components/Home/HomeHero"
import HomeFeatures from "../components/Home/HomeFeatures"
import HomeGuitars from "../components/Home/HomeGuitars"
import { progressService } from "../machines/progressService"
import { fetchGuitars } from "../lib/fetch-guitars"

export default function Home({ content, guitars }) {
  return (
    <Layout
      content={content}
      guitars={guitars}
      progressService={progressService}
    >
      <Head>
        <title>Testing Next.js Applications with Cypress</title>
        <meta
          name="description"
          content="Learn from top industry experts and level-up your testing knowledge - for free."
        />
      </Head>

      <HomeHero />
      <HomeFeatures />
      <HomeGuitars
        guitars={guitars}
        content={content}
        progressService={progressService}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const guitarsJson = await fetchGuitars()
  const guitars = Object.keys(guitarsJson)
  return {
    props: {
      content: guitarsJson,
      guitars,
    },
  }
}
