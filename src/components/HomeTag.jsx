export default function HomeTag() {
    let tag = [
        {
            'tag': 'programming',
            'count': '213k'
        },
        {
            'tag': 'devchallenges',
            'count': '123k'
        },
        {
            'tag': 'frontend',
            'count': '32k'
        },
        {
            'tag': 'helenski',
            'count': '11k'
        },
        {
            'tag': '100DaysOfCode',
            'count': '5k'
        },
        {
            'tag': 'learntocode',
            'count': '1k'
        }
    ]

    return (
        <div className="bg-white shadow-sm rounded-lg py-4 px-6 mb-4">
            <h3 className="font-semibold text-gray-700 text-sm">Trends for you</h3>
            <div className="border border-gray-100 my-2"></div>
            {tag.map(t => {
                return (
                    <div className="py-2">
                        <h3 className="text-gray-700 font-semibold pb-1">{`#${t.tag}`}</h3>
                        <p className="text-gray-400 text-sm">{`${t.count}`} Tweets</p>
                    </div>
                )
            })}
        </div>
    )
}
