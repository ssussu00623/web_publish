export default function MovieChartTitle({text1, text2, text3}){
    return(
        <div>
            <article className="content-title-style">
                <div>
                    <span className="content-title-style-font font-color-main"> {text1}</span>
                    <span> &nbsp;</span>
                    <span className="content-title-style-font font-color-sub">{text2}</span>
                </div>
                <div>
                    <button className="total-view">{text3} &gt;</button>
                </div>
            </article>
        </div>
    );
}