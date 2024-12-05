import EventItem from "./EventItem.jsx";

export default function Event(){
    const list = [
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42386/17297657794310.jpg",
            "title" : "[CGV] 10월 컬처위크",
            "date" : "2024.10.24~2024.10.31"
        },
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42372/17295802409470.jpg",
            "title" : "[베놈-라스트댄스] 씨네브리핑 시리즈",
            "date" : "2024.10.22~2024.10.27"
        },
        {
            "src": "/images/event1.jpg",
            "title" : "[콜렉터블 무비나나]Vol.1 맥스 달튼",
            "date" : "2024.10.22~2024.10.27"
        }
    ]
    return(
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">EVENT</h3>
                    <button className="total-view">전체보기 &gt;</button>
                </div>            
                    <ul className="content-event-list">
                        {list.map (item=> 
                        <li>
                            <EventItem 
                            src={item.src}
                            title={item.title}
                            date={item.date}
                            />
                        </li>
                        )}
                            
                    </ul>
            </section>
    );
}