import Head from "next/head"
import Layout from "../../components/Layout"
import GuitarHero from "../../components/Guitar/GuitarHero"
import GuitarContent from "../../components/Guitar/GuitarContent"
import { progressService } from "../../machines/progressService"
import { fetchGuitars } from "../../lib/fetch-guitars"

export default function SectionPage({
  title,
  lessons,
  description,
  image,
  learnFeatures,
  content,
  guitars,
  guitar,
}) {
  return (
    <Layout
      content={content}
      guitars={guitars}
      progressService={progressService}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <GuitarHero
        title={title}
        description={description}
        image={image}
      />
      <GuitarContent
        title={title}
        lessons={lessons}
        learnFeatures={learnFeatures}
        progressService={progressService}
        guitar={guitar}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const guitarsJson = await fetchGuitars()
  const { title, slug, image, lessons, description, learnFeatures } = guitarsJson[params.guitar]
  const guitars = Object.keys(guitarsJson)

  return {
    props: {
      lessons,
      title,
      slug,
      description,
      learnFeatures,
      image,
      guitars
    },
  }
}

export async function getStaticPaths() {
  const guitarsJson = await fetchGuitars()
  const guitars = Object.keys(guitarsJson)
  const paths = guitars.map((guitar) => {
    const { slug } = guitarsJson[guitar]
    return { params: { guitar:slug } }
  })

  return {
    paths,
    fallback: false,
  }
}
