
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
    const alertIE = document.getElementById('alertIE');
    let newDiv = document.createElement('div');
    newDiv.classList.add('alertIE__inner');

    newDiv.innerHTML = `<p class="alertIE__headline" role="title">Internet Explorer は対応しておりません</p>
    <p>当サイトはお使いのブラウザに対応しておりません。<br>
    お手数ではありますが、Edgeやchromeなど、他のブラウザでアクセスしてください。<br></p>
    <br>
    <p><a href="https://www.google.co.jp/chrome/index.html">Google Chromeをダウンロード</a></p>`;

    alertIE.appendChild( newDiv );    //HTMLの追加

  }
}