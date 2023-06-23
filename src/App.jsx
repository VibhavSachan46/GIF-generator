import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white w-11/12 rounded-lg text-center mt-[40px] text-4xl font-bold py-2 px-10">Random GIFS</h1>
      <div className="flex flex-col w-full items-center">
        <Random />
        <Tag/>
      </div>
    </div>
  )
}
