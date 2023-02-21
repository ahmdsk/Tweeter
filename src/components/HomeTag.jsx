export default function HomeTag() {
    let tag = [
        {
            'id': 1,
            'tag': 'programming',
            'count': '213k'
        },
        {
            'id': 2,
            'tag': 'devchallenges',
            'count': '123k'
        },
        {
            'id': 3,
            'tag': 'frontend',
            'count': '32k'
        },
        {
            'id': 4,
            'tag': 'helenski',
            'count': '11k'
        },
        {
            'id': 5,
            'tag': '100DaysOfCode',
            'count': '5k'
        },
        {
            'id': 6,
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
                    <div className="py-2" key={t.id}>
                        <h3 className="text-gray-700 font-semibold pb-1">{`#${t.tag}`}</h3>
                        <p className="text-gray-400 text-sm">{`${t.count}`} Tweets</p>
                    </div>
                )
            })}
        </div>
    )
}
