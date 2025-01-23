import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from "../components/detail_tabs/Detail.jsx";
import Review from "../components/detail_tabs/Review.jsx";
import ImageList from "../components/ImageList.jsx";
import StarRating from "../components/detail_tabs/StarRating.jsx";
import axios from "axios";
import Qna from "../components/detail_tabs/Qna.jsx";
import ReturnDelivery from "../components/detail_tabs/ReturnDelivery.jsx";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [imgList, setImgList] = useState([]);
  const [size, setSize] = useState("XS");
  const tabs = [
    { name: "detail", label: "DETAIL" },
    { name: "review", label: "REVIEW" },
    { name: "qna", label: "Q&A" },
    { name: "delivery", label: "RETURN & DELIVERY" }
  ];

  useEffect(() => {
    axios
      .get("/data/products.json") // http://localhost:3000/data/products.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) {
            setProduct(product);
            setImgList(product.imgList);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };

  //Tabs event
  const [tabName, setTabName] = useState('detail');
  const handleChangeTabs = (text) => {
    console.log('tab name===>>', text);
    setTabName(text);
  }

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image}   />
          <ImageList className="product-detail-image-top-list"
                      imgList={imgList}/>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li className="product-detail-subtitle-star">
            <StarRating totalRate={5} className="star-coral"/> <span>572개 리뷰 &nbsp;&nbsp; {">"}</span>
          </li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <button className="product-detail-button size">사이즈 </button>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">
        <ul className="tabs">
          {tabs.reduce((acc, tab) => [
            ...acc,
            <li key={tab.name} className={tabName === tab.name ? "active" : ''}>
              <button type="button" onClick={() => handleChangeTabs(tab.name)}>
                {tab.label}
              </button>
            </li>
          ], [])}
        </ul>
        <>
        {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY */}
        {/* <ul className="tabs">
          <li className={tabName==="detail" ? "active": ''}>
            <button type="button" onClick={(e)=> handleChangeTabs("detail")}>DETAIL</button>
          </li>
          <li className={tabName==="review" ? "active": ''}>
            <button type="button" onClick={(e)=> handleChangeTabs("review")}>REVIEW</button>
          </li>
          <li className={tabName==="qna" ? "active": ''}>
            <button type="button" onClick={(e)=> handleChangeTabs("qna")}>Q&A</button>
          </li>
          <li className={tabName==="delivery" ? "active": ''}>
            <button type="button" onClick={(e)=> handleChangeTabs("delivery")}>RETURN & DELIVERY</button>
          </li>
        </ul> */}
        </>
        <div className="tabs_contents">
          { tabName === "detail" && <Detail imgList={imgList} /> }
          { tabName === "review" && <Review /> }
          { tabName === "qna" && <Qna /> }
          { tabName === "delivery" && <ReturnDelivery /> }
        </div>
      </div>
    </div>
  );
}
