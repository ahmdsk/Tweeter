import HomeTag from "./HomeTag";
import NewTweet from "./NewTweet";

export default function HomeSection() {
  return (
    <div className="px-32 py-10 flex items-start gap-5">
        <div className="left w-8/12">
            <NewTweet />
        </div>
        <div className="right w-4/12">
            <HomeTag />
        </div>
    </div>
  )
}