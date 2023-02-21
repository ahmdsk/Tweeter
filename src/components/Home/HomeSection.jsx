import HomeTag from "./HomeTag";
import NewTweet from "./NewTweet";
import SuggestionFollow from "./SuggestionFollow";
import TweetSection from "./TweetSection";

export default function HomeSection() {
  return (
    <div className="px-32 py-10 flex items-start gap-5">
        <div className="w-8/12">
            <NewTweet />
            <TweetSection />
        </div>
        <div className="w-4/12">
            <HomeTag />
            <SuggestionFollow />
        </div>
    </div>
  )
}