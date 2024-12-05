import Header from './layout/Header.jsx';
import Body from './layout/Body.jsx';
import Footer from './layout/Footer.jsx';
import AvatarImage from './AvatarImage.jsx';
import AvatarList from './Avatarlist.jsx';
import Button from './Button.jsx';
import Menu from './Menu.jsx';
import ButtonList from './ButtonList.jsx';

export default function AppLayout(){
    const avatarList = [
        {"img": "/images/people1.webp", "name": "smith"},
        {"img": "/images/people2.webp", "name": "james"},
        {"img": "/images/people3.webp", "name": "kelly"}
    ];

    const buttonList =[
        {"name": "회원가입", "type": "button"},
        {"name": "고객센터", "type": "button"},
        {"name": "Mypage", "type": "button"}
    ]
    return(
        <>
            <Header>
                <AvatarImage img="/images/people1.webp" />
                <Button name="Login" type="button" />
                <Menu name="Home" href="#home" bg="gray" color="white" />
            </Header>
            {/* Header 태그 사이의 각 컴포넌트들은 헤더 컴포넌트드의 칠드런이라 부른다.  
                컴포넌트들이 얼마가 들어가든 빠지든 상관 없다. 헤더.jsx에서 칠드런이 있다고 선언은 해야함.
                약속된 명칭이라 children을 꼭 써야함*/}
            <Body>
                <AvatarList list={avatarList} />
            </Body>
            <Footer>
                <ButtonList list={buttonList} />
            </Footer>
        </>
    );
}