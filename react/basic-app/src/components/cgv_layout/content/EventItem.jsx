export default function EventItem({src, title, date}){
    return(
        <>
        <div>
            <img src={src}
            alt="event1"
            width="200" />
        </div>
    <p className="content-event-title">{title}</p>
    <p className="content-event-sub">{date}</p>
    </>
    )
}