import glob from 'fast-glob'
import * as path from 'path'

async function importTopic(topicFilename) {
  let { meta, default: component } = await import(
    `../pages/topics/${topicFilename}`
  )
  return {
    slug: topicFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllTopics() {
  let topicFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/topics'),
  })

  let topics = await Promise.all(topicFilenames.map(importTopic))

  return topics.sort((a, z) => new Date(z.date) - new Date(a.date))
}
