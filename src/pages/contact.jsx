import Head from 'next/head'
import { Container } from '@/components/Container'
import ContactForm from '@/components/ContactForm'

const Contact = () => {
  return (
    <>
      <Head>
        <title>お問合せフォーム | boxx</title>
        <meta name="description" content="boxxへのご連絡やお問合せはこのフォームからお願いします。" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <ContactForm />
      </Container>
    </>
  )
}

export default Contact
