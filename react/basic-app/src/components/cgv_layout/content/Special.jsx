import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
    const list = [
        {"text1":"CINEMA" , "text2": "#호텔 컨셉의 프리미엄관"},
        {"text1":"CINE & LIVINGROOM" , "text2": "#신개념 소셜 상영관"},
        {"text1":"4DX" , "text2": "#모션시트 #오감체험"},
        {"text1":"CINE de CHEF" , "text2": "#쉐프가 있는 영화관"},
    ]
    return(
        <section>
            <div className="content-title-style">
                <h3 className="content-title-style-font">특별관</h3>
                <button className="total-view">전체보기 &gt;</button>
            </div>
            <div className="special1-content-list">
            <div>
            <div><img src="/images/special1.png" alt="special1"/></div>
            </div>          
                <ul>
                    {list.map(item=> 
                    <li>
                        <SpecialItem 
                            text1={item.text1}
                            text2={item.text2}                        
                            />
                    </li>
                    )}
                </ul>  
            </div>
        </section>
    );
}