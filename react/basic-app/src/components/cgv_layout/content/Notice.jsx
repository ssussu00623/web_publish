export default function Notice(){
    return(
        <>
        <div className="content-event-special">
            <section className="notice-content-list">
            <div className="notice-content-border">
                <div>
                    <div>
                        <span><b>공지사항</b></span>
                        <span>
                            <a href="#">시스템 점검iOS 18 업데이트 관련 예매 서비스...</a>
                        </span>
                        <button className="more-view">더보기</button>
                    </div>
                <div> 
                    <p><b>고객센터</b></p>
                    <div>
                        <p><b>1544-1122</b></p>
                        <p>고객센터 운영시간 (평일 9:00~18:00)</p>
                        <p>업무시간 외 자동응답 안내 가능합니다.</p>
                    </div>
                    <div>
                        <button>FAQ</button>
                        <button>1:1 문의</button>
                        <button>대관/대체 문의</button>
                    </div>
                </div>
                </div>
                <div>
                    <div>
                        <h3>앱 다운로드</h3>
                        <p>CGV앱에서 더 편리하게 이용하세요.</p>
                        <img src="/images/QR.gif" alt="CGV 앱다운로드 QR코드" />
                        <p>QR코드를 스캔하고
                            앱설치 페이지로 바로 이동하세요</p> 
                    </div>
                </div>
        </div>
            <div className="notice-img">
                <img src="/images/slae_image.png"
                alt="CGV X Bugs이용권 출시"
                width="150px" />
            </div>
    </section>
    </div>
    </>
    );
}