import React from "react";
import { Card } from "./Card"
import { formatDate } from "@/lib/formatDate"
import { TopicProps } from "@/types/TopicProps";

export const Topic: React.FC<TopicProps> = ({ topic }) => {
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/topics/${topic.slug}`}>
            {topic.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={topic.date}
            className="md:hidden"
            decorate
          >
            {formatDate(topic.date)}
          </Card.Eyebrow>
          <Card.Description>{topic.description}</Card.Description>
          <Card.Cta>Read topic</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={topic.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(topic.date)}
        </Card.Eyebrow>
      </article>
    )
  }
  
