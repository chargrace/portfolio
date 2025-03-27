import styles from "./projects.module.css"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent
} from "@/components/ui/card"

const projects = [
  { id: 1, title: "Happy hands", description: "A task management app for families that uses a customisable reward system to help children build better habits. ", links: "https://final-project-404-bra.vercel.app/", linktext: "See website here" },
   { id: 2, title: "Chinese idiom app", description: "A Next.js app with static API created to allow users to search through a bank of chinese idioms easily.", links: "https://idiom-app.vercel.app/", linktext: "See website here " },
  { id: 3, title: "Movie recommendation app", description: "A Next.js application created to make searching for movie and TV show recommendations easier and without a user-friendly interface.", linktext: "Deployment coming soon" },
]

export default function Projects() {
  return (
    <section className="relative">
    <Carousel className="w-full max-w-[90%] mx-auto">
      <h2 className="flex flex-col text-center text-4xl justify-between h-full p-6 space-y-4 font-semibold">My Projects</h2>
    <CarouselContent>
    {projects.map((project) => (
        <CarouselItem key={project.id}>
          <div className="p-1">
            <Card className="flex bg-grey shadow-lg rounded-lg max-w-[40vw] mx-auto flex flex-col">
              <CardContent className="flex flex-col justify-between h-full p-6 space-y-4">
                <div className="w-full text-center mb-4">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <div className="w-full flex-1 p-4 pb-0 mt-8 rounded-md space-y-2">
                  <p className="text-md">{project.description}</p>
                  </div>
                  <div className="w-full p-4 pb-0 mt-10 text-center rounded-md font-semibold">
                  <a href={project.links} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-md transition-all duration-200">{project.linktext}</a>
                  </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl text-white bg-black p-2 rounded-full" />
    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl text-white bg-black p-2 rounded-full" />
  </Carousel>
  </section>
)
}
{/* <Carousel>
  <CarouselContent>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  </Carousel> */}


  <section className={styles.projects}>
    <h2 className={styles.title}>My Projects</h2>
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <Card key={project.id} className={styles.projectCard}>
          <CardContent>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.links}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>