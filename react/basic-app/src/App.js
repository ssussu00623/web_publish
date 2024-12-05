import './App.css';
// import Avatarlist from './AppAvarta.js'
// import AppDwitter from './components/dwitter/AppDwitter.jsx';
// import AppButton from './components/AppButton.jsx';
//이 파일을 부르고...
// import AppLayout from './components/layout/AppLayout.jsx'
import AppCgv from './components/cgv_layout/AppCgv.jsx';

export default function App() {

  return (
    <div className='App'> 
      <AppCgv />
    </div>
  );
}
//이 파일을 AppMenu자리에 끼워넣어요 
// App은 기본 가운데 정렬이라 css넣어도 조금 다른 