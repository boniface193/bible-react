import { ArrowLeft, ArrowRight } from "../assets/icons";

const Home = () => {
  const weeks = [
    { name: "sun", day: "11" },
    { name: "mon", day: "12" },
    { name: "tue", day: "13" },
    { name: "wed", day: "14" },
    { name: "thu", day: "15" },
    { name: "fri", day: "16" },
    { name: "sat", day: "17" },
  ];

  return (
    <section className="flex justify-between lg:space-y-0 space-y-10 lg:flex-row flex-col lg:w-auto w-4/5">
      <aside className="lg:w-1/2 space-y-6 h-96">
        <h1 className="sm:text-4xl text-xl font-bold font-mono">Happy Reading</h1>
        <p>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.
        </p>
        <button className="bg-blue-500 text-white h-10 rounded-3xl sm:w-40 w-full">Start Reading</button>
        <aside className="sm:w-72 w-full">
          <div className="flex items-center justify-between">
            <h1 className="sm:text-2xl text-xl font-medium underline py-4">Schedule Reading</h1>
            <div className="flex space-x-3 cursor-pointer">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>

          <table cellPadding={5}>
            <thead>
              <tr>
                {weeks.map((item, index) => (
                  <th className="capitalize" key={index}>{item.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {weeks.map((item, index) => (
                  <td key={index}>{item.day}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </aside>
      </aside>
      <aside className="text-right space-y-5 lg:px-0 px-5 pb-5 sm:w-96">
        <h1 className="sm:text-3xl text-xl font-medium">Godly Intimacy</h1>
        <p className="capitalize">follow my blog on <a target="_blank" rel="noreferrer" className="dark:text-green-500 text-green-800" href="https://godsintimacy.blogspot.com">Marriage counselling, Revival, Endtime Messages etc.</a></p>
        <h1 className="sm:text-3xl text-xl font-medium">Profile</h1>
        <p className="capitalize">Hire me, i am a passionate frontend web developer, With over 4years of experience designing and developing responsive and user-friendly web applications.</p>
        <h1 className="sm:text-3xl text-xl font-medium">Skills</h1>
        <p className="capitalize">Proficient in React, Typescript and Vue with a knack for design.</p>
      </aside>
    </section>
  )
}

export default Home;