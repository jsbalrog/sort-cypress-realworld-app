import path from "path"
import fs from "fs"
import slugify from "slugify"
import guitarsJson from "../data/guitars.json"

Object.keys(guitarsJson).forEach((course) => {
  let { slug, title, lessons } = guitarsJson[course]
  slug = slugify(title, { lower: true })

  lessons.forEach((lesson) => {
    lesson.slug = slugify(lesson.title, { lower: true })
  })
})

fs.writeFileSync(
  path.join(process.cwd(), "learn.json"),
  JSON.stringify(guitarsJson, null, 2)
)
