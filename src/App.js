import './App.scss';
import React, { useState } from 'react';
import AppHeader from './components/App_header/AppHeader';
import AppSelectBox from './components/App_Selectbox/AppSelectBox';
import AppThevanhoi from './components/App_Thevanhoi/AppThevanhoi';
import thevanhoiicon from './assets/images/icon.png';
import AppTrending from './components/App_Trending/AppTreding';
// Class component
export default function App(props) {
    // change BG 
    const [show, setShow] = useState(true);
    const callback=(value) =>{
      setShow(value)
    }
    const classNames = show === true ?  'App__wrapper' : 'App__wrapper App__wrapper--dark'
    //  
    let selects = [{img:'https://www.youtube.com/img/explore/destinations/icons/trending_color_32.png',name:'Thịnh hành'},
      {img:'https://www.youtube.com/img/explore/destinations/icons/music_color_32.png',name:'Âm nhạc'},
      {img:'https://www.youtube.com/img/explore/destinations/icons/gaming_color_32.png',name:'Trò chơi'},
      {img:'https://www.youtube.com/img/explore/destinations/icons/news_color_32.png',name:'Tin tức'},
      {img:'https://www.youtube.com/img/explore/destinations/icons/sports_color_32.png',name:'Thể thao'},
    ];
    let thevanhoi = [{img:'https://i.ytimg.com/vi/kfw7MYah2n0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDZ_Oa1BHIXxy5OQsNxijWeZmokw',tittle:'Quách Thị Lan nhảy hiphop',chanel:'HTV3'},
    {img:'https://i.ytimg.com/vi/kfw7MYah2n0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDZ_Oa1BHIXxy5OQsNxijWeZmokw',tittle:'Quách Thị Lan nhảy hiphop',chanel:'HTV3'},
    {img:'https://i.ytimg.com/vi/kfw7MYah2n0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDZ_Oa1BHIXxy5OQsNxijWeZmokw',tittle:'Quách Thị Lan nhảy hiphop',chanel:'HTV3'},
    {img:'https://i.ytimg.com/vi/kfw7MYah2n0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDZ_Oa1BHIXxy5OQsNxijWeZmokw',tittle:'Quách Thị Lan nhảy hiphop',chanel:'HTV3'},
    ];
    let trending = [{img:'https://i.ytimg.com/vi/6IX9kq4Ovzc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-xHa6cQUoKxLasUkW1V_O4HG26w',
    tittle:'SAI CÁCH YÊU | OFFICIAL MUSIC VIDEO',chanel:'LÊ BẢO BÌNH',view:'15tr',time:'10 ngày trước',sub:' ► SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO #LeBaoBinh #SaiCachYeu #SCY Nghe Audio Độc quyền tại Zing MP3:Le-Bao-Binh/ZU.html...'},
    {img:'https://i.ytimg.com/vi/HZi4eJXWZU0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBq4lPpS47R2tikuQd0U1xhWI0w_w',
    tittle:'Rồi Tới Luôn - Nal (MV Audio Lyric)',chanel:'Nal Official',view:'5tr',time:'7 ngày trước',sub:'► Rồi Tới Luôn - Nal (MV Audio Lyric) #roitoiluon #nal #roitoiluonnal Link Audio: https://zingmp3.vn/bai-hat/Roi-Toi-Luon-Nal/ZUOZWCUC.html ------- Composer : Nal Executive Producer: CT...'},
    {img:'https://i.ytimg.com/vi/6IX9kq4Ovzc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-xHa6cQUoKxLasUkW1V_O4HG26w',
    tittle:'SAI CÁCH YÊU | OFFICIAL MUSIC VIDEO',chanel:'LÊ BẢO BÌNH',view:'15tr',time:'1 ngày trước',sub:'► SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO #LeBaoBinh #SaiCachYeu #SCY Nghe Audio Độc quyền tại Zing MP3:Le-Bao-Binh/ZU.html...'},

  ]
     return (
    <div className="App">
      <div className={classNames}>
        <div className="App__header">
           <AppHeader callback = {callback}/>
        </div>
        <div className="App__body">
          <div className="App__body-selectbox">
            {selects.map((item,i) => {
                          return  <AppSelectBox item={item} key={i}/>
                          })}
          </div>
          <div className="App__body-thevanhoi">
            <div className="App__body-thevanhoi-header"> 
              <img src={thevanhoiicon}></img>
              <p><b>Thế vận hội Tokyo 2020</b></p>
            </div>
            <div className="App__body-thevanhoi-body">
              {thevanhoi.map((item,i) => {
                              return  <AppThevanhoi item={item} key={i}/>
                              })}
            </div>
          </div>
          <div className="App__body-trending">
            <div className="App__body-trending-header">
                <p><b>Video thịnh hành</b></p>
            </div>
            <div className="App__body-trending-body">
              {trending.map((item,i) => {
                                return  <AppTrending item={item} key={i}/>
                                })}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
  }


