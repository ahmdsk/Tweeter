import HomeTag from "./HomeTag";
import NewTweet from "./NewTweet";
import SuggestionFollow from "./SuggestionFollow";
import TweetSection from "./TweetSection";

export default function HomeSection() {
  return (
    <div className="xl:px-32 md:px-4 px-8 py-10 flex items-start md:inline-block gap-5">
        <div className="w-8/12 md:w-full">
            <NewTweet />
            <TweetSection />
        </div>
        <div className="w-4/12 md:hidden">
            <HomeTag />
            <SuggestionFollow />
        </div>
    </div>
  )
}