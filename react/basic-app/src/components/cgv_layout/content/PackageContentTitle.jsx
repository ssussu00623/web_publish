export default function PackageContentTitle({title}){
    return(
        <div>
            <span className="package-title">{title}</span>
            <button className="more-view">더보기</button>
        </div>
    );
}