import { Header } from './components/Header'
import { Clients, Hero } from './components/Hero'
import { Services, WhyChoose } from './components/Services'
import { About, ChatWidget, Contact, Footer, Insights, Stack, Team, Testimonials } from './components/Story'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <WhyChoose />
        <Work />
        <Team />
        <Stack />
        <About />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
