import { TodoistApi } from '@doist/todoist-api-typescript'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BoxTasks } from '../components'

interface HomeProps {
  apiUrl: string;
}

function Home ({apiUrl}: HomeProps) {

  const api = new TodoistApi(apiUrl)
  // const [projects, setProjects] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    api.getTasks()
        .then((tasks) => {
          // console.log(tasks);
          setTasks(tasks);
        })
        .catch((error) => console.log(error))
    
    // api.getProjects()
    //   .then((projects) => {
    //     // console.log(projects);
    //     setProjects(projects);
    //   })
    //   .catch((error) => console.log(error))
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Todoist Eisenhower</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <BoxTasks tasks={tasks} priority={1} />

          <BoxTasks tasks={tasks} priority={2} />

          <BoxTasks tasks={tasks} priority={3} />
          
          <BoxTasks tasks={tasks} priority={4} />

        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.TODOIST_URL as string;

  return {
    props: {
      apiUrl,
    }
  }
}

export default Home
