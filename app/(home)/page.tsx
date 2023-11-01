
import Link from 'next/link'
import Image from 'next/image'
import profile from "@/public/images/avatars/profile.jpg";


export default async function HomePage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container md:flex justify-center items-center md:w-1/2">
            HOME PAGE
        </div>
      </section>
    </>
  )
}