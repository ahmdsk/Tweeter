export default function LeftMenu(props) {
    return (
        <div className="bg-white shadow-sm rounded-lg p-6 flex flex-col gap-6">
            {props.menu.map((menu) => {
                return <h4 className="text-gray-600 font-semibold">{menu}</h4>
            })}
        </div>
    )
}
