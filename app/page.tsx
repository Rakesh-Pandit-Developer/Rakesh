import ClientRoot from "./ClientRoot"
import HomeClient from "./HomeClient"

export const metadata = {
  title: "Rakesh Pandit - Frontend Developer",
  description: "Portfolio website of Rakesh Pandit - Frontend Developer and Web Designer",
}

export default function Home() {
  return (
    <ClientRoot>
      <HomeClient />
    </ClientRoot>
  )
}

