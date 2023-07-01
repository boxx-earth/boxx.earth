import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import React from 'react';

type ArticleProps = {
  article: {
    slug: string;
    title: string;
    date: string;
    description: string;
  }
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
      <Card as="article" className="">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" className="" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    )
  }
  