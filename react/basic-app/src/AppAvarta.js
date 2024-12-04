import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/Avatar.jsx';
import AvatarList from './components/AvatarImageList.jsx';
import { useEffect, useState } from 'react';


export default function Avatarlist() {
  const [imgList, setImgList] = useState([]);
  const [avatarList, setAvatarList] = useState([]);
  //이미지리스트라고 하는 함수는 만들어지고 종료할 때까지 리액트가 상태를 관리한다는 뜻.
  //이미지 리스트의 타입은 "배열"
  useEffect(()=> {
    fetch("data/avatar.json")
      .then(result=> result.json())
      .then(jsonData=> {
        setImgList(jsonData.imageList);
        setAvatarList(jsonData.avatarList);
      })
      .catch((error)=> console.log(error));
  }, []);
  console.log(`imgList--->${imgList}`);
  console.log(`imgList--->${avatarList}`);
  
  // const imgList = [
  //   {"img":"/images/people1.webp"},
  //   {"img":"/images/people2.webp"},
  //   {"img":"/images/people3.webp"}
  // ]
  // const avatarimgList = [
  //   {"img":"/images/people1.webp", "name": "smith"},
  //   {"img":"/images/people2.webp", "name": "james"},
  //   {"img":"/images/people3.webp", "name": "kelly"}
  // ]
  return (
    <div className="App">
      <div className='App-container'>
      <Avatar img="/images/people1.webp" name="smith"/>
      <Avatar img="/images/people2.webp" name="james" />
      <Avatar img="/images/people3.webp" name="kelly "/>
      </div>
      <div className='App-container'>
        <AvatarImage img="/images/people1.webp" />
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div className='App-container'>
        <AvatarImageList list = {imgList} />
      </div>
      <div className='App-container'>
        <AvatarList list = {avatarList} />
      </div>
    </div>
  );
}

