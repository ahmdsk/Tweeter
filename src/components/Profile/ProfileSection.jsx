import LeftMenu from "../Explore/LeftMenu";
import TweetSection from "../Home/TweetSection";
import ProfileCard from "./ProfileCard"

export default function ProfileSection() {
    let menu = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

    return (
        <>
            <div className="bg-[url('https://images.unsplash.com/photo-1676763134010-5aefbe59285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')] w-full h-72 bg-no-repeat bg-cover bg-center pt-48">
                <ProfileCard />

                <div className="px-28 flex items-start gap-5">
                    <div className="w-4/12">
                        <LeftMenu menu={menu} />
                    </div>
                    <div className="w-8/12">
                        <TweetSection />
                    </div>
                </div>
            </div>
        </>
    )
}