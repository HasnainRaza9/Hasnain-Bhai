import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
<figure className="md:flex bg-sky blue-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="hasnain.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hi, I'm Hasnain Raza, a BS Computer Science student at KFUEIT University. I’m passionate about technology and eager to explore new developments in the field of computer science.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        HASNAIN RAZA
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Web Developer, KFUEIT
      </div>
    </figcaption>
  </div>
</figure></div>    </main>
  );
}
