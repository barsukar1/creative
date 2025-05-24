import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the data.json file
  redirect("/data.json")
}
