import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import { TopicProps } from '@/types/TopicProps'

export const HomeTopic = ({ topic }: TopicProps) => {
    return (
      <Card as="topic" className="">
      <Card.Title href={`/topics/${topic.slug}`}>
        {topic.title}
      </Card.Title>
      <Card.Eyebrow as="time" className="" dateTime={topic.date} decorate>
        {formatDate(topic.date)}
      </Card.Eyebrow>
      <Card.Description>{topic.description}</Card.Description>
      <Card.Cta>Read topic</Card.Cta>
    </Card>
    )
  }
  