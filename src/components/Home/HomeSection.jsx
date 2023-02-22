import HomeTag from "./HomeTag";
import NewTweet from "./NewTweet";
import SuggestionFollow from "./SuggestionFollow";
import TweetSection from "./TweetSection";

export default function HomeSection() {
  return (
    <div className="xl:px-32 sm:px-4 min-[300px]:px-2 min-[300px]:py-4 md:px-8 md:py-10 md:flex items-start gap-5 sm:inline-block">
        <div className="md:w-8/12 sm:w-full min-[300px]:w-full">
            <NewTweet />
            <TweetSection />
        </div>
        <div className="md:w-4/12 md:inline sm:hidden min-[300px]:hidden">
            <HomeTag />
            <SuggestionFollow />
        </div>
    </div>
  )
}