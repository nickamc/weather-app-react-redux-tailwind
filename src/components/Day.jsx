function Day(props) {
    const {
        dt,
        temp,
        icon
    } = props
    return (
        <div className="flex flex-nowrap justify-between items-center gap-5 p-5 rounded-xl hover:bg-[#ecf3f8]">
            <div className="flex flex-col flex-nowrap gap-1">
                <p className="font-medium">{dt.toLocaleString('en-US', { weekday: 'long' })}</p>
                <p className="text-sm text-[#999999]">{dt.toLocaleString('en-US', { day: 'numeric', month:'short' })}</p>
            </div>
            <p className="font-medium text-xl">{temp}°</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" width="60" />
        </div>
    )
}

export default Day