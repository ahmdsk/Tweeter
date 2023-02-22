import LeftMenu from "../Explore/LeftMenu";
import TweetSection from "../Home/TweetSection";
import ProfileCard from "./ProfileCard"

export default function ProfileSection() {
    let menu = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1676763134010-5aefbe59285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')] w-full h-72 bg-no-repeat bg-cover bg-center pt-48">
            <ProfileCard />

            <div className="lg:mx-28 md:mx-6 flex md:flex-row items-start gap-5 min-[300px]:flex-col min-[300px]:px-3">
                <div className="md:w-4/12 min-[300px]:w-full">
                    <LeftMenu menu={menu} />
                </div>
                <div className="md:w-8/12 min-[300px]:w-full">
                    <TweetSection />
                </div>
            </div>
        </div>
    )
}