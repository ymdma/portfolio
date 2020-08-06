
/* IE判定 */
export function isIE() {
  let userAgent = window.navigator.userAgent.toLowerCase();
  if ( userAgent.indexOf( 'msie' ) !== -1 || userAgent.indexOf( 'trident' ) !== -1 ) {
      return true;
  }
  return false;
}

// IE非対応の旨伝える
export const noIE = () => {

  if ( isIE() ) {
    const alertBox = document.getElementById('alertBox');
    let newDiv = document.createElement('div');
    newDiv.classList.add('ie_alert');

    newDiv.innerHTML = `<span>Internet Explorer は対応していません</span>
    <p>当サイトはあなたが使用しているブラウザに対応しておりません。<br>
    Edgeやchromeなど、他のブラウザでアクセスしてください。<br>
    <br>
    <a href="https://www.google.co.jp/chrome/index.html">Google Chromeをダウンロード</a>`;

    alertBox.appendChild( newDiv );    //HTMLの追加
  }

}