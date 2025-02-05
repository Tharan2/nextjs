
import TomStory from "./story/Tom-story";
export default function Home() {
  return (
    <div className="flex p-10 items-center flex-col top ">
    <div className=" text-2xl font-serif font-bold">Home</div>
    <TomStory/>
    </div>
  );
}
