import {useState, useEffect} from 'react';

export default function FooterContent(){
    const [companyInfo, setCompanyInfo] = useState({});
        useEffect(()=>{{/*/data/cgv_compinfo.json 에서 끌어오는 데이터 */}
            fetch("/data/cgv_compinfo.json") 
                .then(data => data.json())
                .then(jsonData => setCompanyInfo(jsonData))
                .catch(error=> console.log(error))
        }, [])
    return(
        <div class="footer-content">
        <div class="footer-intro">
            <ul>
                {companyInfo.list && companyInfo.list.map(menu=>
                <li><a href="#">{menu.name}</a></li>
                )}
            </ul>
        </div>
        <p class="p">{companyInfo.adress}</p>
        <p> 대표이사: {companyInfo.ceo} · 사업자 등록번호: {companyInfo.no} · 통신판매업신고번호 : {companyInfo.payno}사업자정보확인</p>
        <p>호스팅 사업자: {companyInfo.hoisting} · 대표이메일: {companyInfo.companymail} </p>
        <p class="p2"> 
            <a href="/cgv/admin/admin_main.html" target="_parent">©</a> CJ CGV. All Rights Reserved</p>
    </div>
    );
}