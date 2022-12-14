import './App.css';
import icon from './icon.png';
import grassBlock from './grassBlock.png';
import sword from './sword.png';
import skulkSensor from './skulkSensor.gif';

function App() {
  return (
    <>
      <div id="title">
        <img src={icon} alt="牛牛" /><br/>
        牛牛的草原
      </div>
      <div id="root">
        歡迎來到牛牛的草原!<br/>
        我們有創造、生存和古城生存伺服器!
        <div className="onehundredpercentuwu" id="cre">
          <table style={{width:'100%',height:'100%',fontSize:'30px',whiteSpace:'pre-wrap',color:'white'}}>
            <tbody>
              <tr>
                <td>
                  <img src={grassBlock} width="30%" alt="草方塊"/><br/>
                  創造伺服器
                </td>
                <td>
                  在開闊的草原上，<br/>
                  跟牛牛們一起<br/>
                  盡情地創造！
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="onehundredpercentuwu" id="surv">
          <table style={{width:'100%',height:'100%',fontSize:'30px',whiteSpace:'pre-wrap',color:'white'}}>
            <tbody>
              <tr>
                <td>
                  一片廣闊的草原，<br/>
                  你可以在這裡<br/>
                  以任何方式生存！
                </td>
                <td>
                  <img src={sword} width="30%" alt="鑽石劍"/><br/>
                  生存伺服器
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="onehundredpercentuwu" id="ancient">
          <table style={{width:'100%',height:'100%',fontSize:'30px',whiteSpace:'pre-wrap',color:'white'}}>
            <tbody>
              <tr>
                <td>
                  <img src={skulkSensor} width="30%" alt="尋聲感測器"/><br/>
                  古城生存伺服器
                </td>
                <td>
                  在漆黑的遠古之城生存，<br/>
                  小心不要觸發尖嘯器，<br/>
                  不然就會召喚出Warden！
                  <sub><br/><br/>
                  感謝<a href="https://youtube.com/c/Onityan">鬼鬼</a>的<a href="https://youtu.be/ZvKw9OVza88">遠古之城生存系列</a>提供靈感
                  </sub>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="footer" className="onehundredpercentuwu">
        <center>
          <img src={icon}  className="valmiddle" width="50px" alt="牛牛" /> 牛牛的草原<br/><br/>
          本網站使用<a href="https://ipfs.tech/">IPFS</a>，為Web3盡一份心力
        </center>
      </div>
    </>
  );
}

export default App;
