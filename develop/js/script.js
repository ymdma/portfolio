// /* ==========================
//   Imports
// =========================== */

const Tech = require("../json/data.json");
import {Person} from "./_class";


document.addEventListener("DOMContentLoaded", () => {
  // hbg();
  appendSkillList()
  skillShow()
  appendProf()
  profileHeight()
  toggleScrollBtn()
  scrollEvent()
});


// /* ==========================
//   Global Variable
// =========================== */

let currentLocation = 'upper'; // スクロール位置が上半分か下半分か

// 山田オブジェクト (ここの入れ替えで他の人のページにもなる、というテイ)
let Yamada = new Person()

Yamada = {
  profile: {
          name: '<ruby><rb>山田</rb><rp>(</rp><rt>ヤマダ</rt><rp>)</rp><ruby>&nbsp;<ruby><rb>将登</rb><rp>(</rp><rt>マサト</rt><rp>)</rp><ruby>',
          birth: '1985年11月5日生',
          comment: '大学・専門学校卒業後、約9年間レコーディングエンジニアとして働く。<br>2017年、今後の需要を考え、音楽業界から広告業界へ身を移す。しかし、新たに所属した広告音楽の制作会社(TVCMメイン)でも、マスメディアに対しての広告費の削減等、時代の流れによる需要減が進む。<br>そんな中、グループ再編の為に所属していた会社が吸収合併される。スタジオも閉鎖となる。（会社は事実上の解散となる。）これを機会に、今後の生き方を考える。<br>2019年、「人生は一度きり、大きく挑戦するならこれは最後のチャンス！」と考え、Webのエンジニアを目指す。プログラミングスクールに通った後、現在転職活動中。'
      },
  skill: {
          pc: {
            os: [
              'Mac',
              'Windows'
            ],
            software: [
              'DAW',
              'Office',
              '映像編集',
              '画像編集(Photoshop, Illustrator)'
            ]
          },
          other: 'RecordingEngineer & Mixer',
          web: {
                html       : ( () => { pushContent( 'test',  `${technology('html','以前にも何度か使用経験はありましたが、TECH::EXPERTにて基礎を学習し直し、現在も日々理解を進めています。' )}`) }),
                haml       : ( () => { pushContent( 'test',  `${technology('haml','TECH::EXPERTにて学習しました。<br>Railsの開発時に使用しています。問題なく使用できる言語です。' )}`) }),
                pug        : ( () => { pushContent( 'test',  `${technology('pug','スクール終了後、独学にて学習しました。問題なく使用できます。' )}`) }),
                css        : ( () => { pushContent( 'test',  `${technology('css','以前にも何度か使用経験はありましたが、TECH::EXPERTにて基礎を学習し直し、現在も日々理解を進めています。' )}`) }),
                sass       : ( () => { pushContent( 'test',  `${technology('sass','TECH::EXPERT及び、個人で学習しています。<br>@mixinと@extendの使い分けや、作業を効率化できる書き方を意識して、日々理解を進めています。' )}`) }),
                js         : ( () => { pushContent( 'test',  `${technology('js','主にスクール修了後、個人で学習しています。<br>自分が一番好きな言語です。<br>当サイト、<a href="https://hiragana-de-porker.web.app/">ひらがなポーカー</a>、<a href="https://count--down.web.app/">CountDown</a>、<a href="https://github.com/ymdma/teacher-search-module">教員検索</a> 等、頻繁にアウトプットを行なっています。' )}`) }),
                jQuery     : ( () => { pushContent( 'test',  `${technology('jQuery','DOM操作やAPI、ajaxなど。TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。' )}`) }),
                vue        : ( () => { pushContent( 'test',  `${technology('vue','独学にて学習しました。<br>TODOアプリ / シンプルなAPIを使うアプリを作るなどアウトプットを行いました。(vue-cli含む)' )}`) }),
                nuxt       : ( () => { pushContent( 'test',  `${technology('nuxt','独学にて学習しました。<br>TODOアプリ(Firestore連携) / シンプルな外部APIを使うアプリを作るなどアウトプットを行いました。' )}`) }),
                ruby       : ( () => { pushContent( 'test',  `${technology('ruby','TECH::EXPERTにて学習しました。フレームワークは、Ruby on Railsの使用経験があります。' )}`) }),
                rails      : ( () => { pushContent( 'test',  `${technology('rails','TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。' )}`) }),
                php        : ( () => { pushContent( 'test',  `${technology('php','少しですが、独学にて学習。<br>DAOを用いたスクラッチでのMVCアプリケーションの作成などアウトプットしつつ学びました。<br>XAMP、MAMPは使用経験あり。' )}`) }),
                wordPress  : ( () => { pushContent( 'test',  `${technology('wordPress','個人事業主時代に集客目的で運用経験あり。XAMP,MAMP、レンタルサーバー上での環境構築の経験あり。<br>（Web技術全体の理解を深める為に試しました。）' )}`) }),
                slack      : ( () => { pushContent( 'test',  `${technology('slack','使用できます。' )}`) }),
                git        : ( () => { pushContent( 'test',  `${technology('git','TECH::EXPERTにて学習しました。 <a href="https://github.com/ymdma/"><br>ID:ymdma</a>' )}`) }),
                gitHub     : ( () => { pushContent( 'test',  `${technology('gitHub','TECH::EXPERTにて学習しました。 <a href="https://github.com/ymdma/"><br>ID:ymdma</a>' )}`) }),
                sourcetree : ( () => { pushContent( 'test',  `${technology('sourcetree','元々GitHubDesktopやVSCを使用していたため、最近少しずつ慣れている所です。' )}`) }),
                nginx      : ( () => { pushContent( 'test',  `${technology('nginx','TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)' )}`) }),
                mysql      : ( () => { pushContent( 'test',  `${technology('mysql','TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)' )}`) }),
                webpack    : ( () => { pushContent( 'test',  `${technology('webpack','独学にて学習しました。<br>基本的な使用ができます。<br>現在よく使う構成は、Pug、Sass、JS、そしてタスクランナーにglobule です。' )}`) }),
                docker     : ( () => { pushContent( 'test',  `${technology('docker','composeからの構築程度で、初級レベルです。' )}`) }),
                aws        : ( () => { pushContent( 'test',  `${technology('aws','TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)' )}`) }),
              firebase     : ( () => { pushContent( 'test',  `${technology('firebase','簡単なアプリケーションを作った際、DBにFirestoreを使用してみたり、<br>フロントで完結するアプリやサイトをHostingを使ってアップしています。' )}`) })
          },
          portfolio: {
                mercari: {
                        title  : 'mercariコピーサイト',
                        url    : 'http://13.115.148.93/',
                        gitHub : 'https://github.com/ymdma/freemarket_sample_60c',
                        comment: 'Basic認証 ID:mercari PASS:1031<br>TECH::EXPERTでのチーム開発（4人）にて制作しました。<br>メルカリのクローンサイトを制作し、スクラムを組んでのアジャイル開発を経験しました。<br>主な担当箇所としては、要件定義、DB設計、Pay.jp(開発環境)、 SNS認証(開発環境) 等です。'
                },
                groupBlog: {
                        title  : 'GroupBlog',
                        url    : 'http://52.193.98.166/',
                        gitHub : 'https://github.com/ymdma/group_blog',
                        comment: 'グループ機能を持ったショートブログの投稿アプリケーション。<br>ページ遷移を制限するため、indexに機能を集めました。その為Ajaxを多用しています。'
                },
                hiraganaPorker: {
                        title  : 'ひらがなポーカー',
                        url    : 'https://hiragana-de-porker.web.app/',
                        gitHub : 'https://github.com/ymdma/hiragna-porker',
                        comment: 'ひらがなを使ったカードゲームを２人プレイ用のJavaScriptゲームで再現しました。<br>面白い言葉を作った方が勝ち！'
                },
                countDown: {
                        title  : 'countDown',
                        url    : 'https://count--down.web.app/',
                        gitHub : 'https://github.com/ymdma/count-down',
                        comment: '1から25までの数字を順番にクリック（タップ）していき、早いタイムを目指すゲームです。JavaScriptで制作しています。<br>よりよいコードを書けるように、可読性やメンテナンス性を高めるなど意識しました。'
                },
                searchTeacher: {
                        title  : '教員検索',
                        url    : '#',
                        gitHub : 'https://github.com/ymdma/teacher-search-module',
                        comment: ''
                }
          }
  }
};


// /* ==========================
//   Functions ユーティリティ系
// =========================== */
                                // タイムライン外の処理

// // 対象要素にisHiddenクラスの付与
// const setIsHidden = target => {
//   target.classList.add('is-hidden');
// }

// // 対象要素のisHiddenクラス削除
// const removeIsHidden = target => {
//     target.classList.remove('is-hidden');
// }

// // target.toggleClass('.is-hidden')
// const isHidden = target => {
//   if (target.classList.contains('is-hidden')) {
//     target.classList.remove('is-hidden');
//   } else {
//     target.classList.add('is-hidden');
//   }
// }

// // 画面の初期化
// const removeEle = (ele) => {
//   while (ele.firstChild) ele.removeChild(ele.firstChild);
// }



function setAriaExpanded(target) {
  const checkProp = target.getAttribute('aria-expanded')
  if (checkProp === 'true') {
    target.setAttribute('aria-expanded', false);
  }
  else {
    target.setAttribute('aria-expanded', true);
  }
};


// /* ==========================
//   Functions メイン処理
// =========================== */



// HTMLにプッシュ
const pushContent = (target, str) => {
  document.getElementById(target).innerHTML = str;
}

// Skills
function technology(key,str) {
  return `<div>
            <p class="name" role="title">${Tech[key].name}</p>
            <p class="logo"><img src="${Tech[key].logo}"></p>
          </div>
          <p class="comment">${str}</p> ` ;
};

// オブジェクトデータを呼び出す
function callData (a1,a2,a3) {
  return Yamada[a1][a2][a3]();
}


// profile
const appendProf = () => {
  const prof = Yamada.profile;
  const profList = document.getElementById('profList');
  let li;
  Object.values(prof).forEach( e => {
    li = document.createElement('li');
    li.innerHTML = `${e}`;
    profList.appendChild(li);
  });
}

// profile のheight自動追従 リサイズ時用
window.addEventListener('resize',() => profileHeight() );

// Skills leftBox のheight自動追従 リサイズ時用
window.addEventListener('resize',() => skillsHeight() );

// profile のheight自動追従 (DOMContentLoaded・window/resize より呼出)
const profileHeight = () => {
  const profLeft = document.getElementById('profile-left');
  let myDataHeight;
  myDataHeight = document.getElementById('myData').clientHeight;
  setTimeout( fitHeight (profLeft, myDataHeight), 200);
}

// profile のheight自動追従 (DOMContentLoaded・window/resize より呼出)
const skillsHeight = () => {
  const skillsLeft = document.getElementById('skillsLeft');
  let skillDisplayHeight;
  skillDisplayHeight = document.getElementById('skillsRight').clientHeight;
  setTimeout( fitHeight (skillsLeft, skillDisplayHeight), 200);
}

// heightを設定
function fitHeight(target,size) {
  target.style.height = `${size}px`;
}

const appendSkillList = () => {
  const webSkill = Yamada.skill.web;
  const skillList = document.getElementById('skillList');

  Object.keys(webSkill).forEach(e => {

    let newLi = document.createElement('li');

    let logoURL = Tech[`${e}`]['logo'];

    newLi.id = `${e}`
    newLi.style.backgroundImage = `url(${logoURL})`
    skillList.appendChild(newLi);
  })
}

const skillShow = () => {
  const skillList_Li = document.querySelectorAll(' #skillList > li ');
  const skillArr = Array.prototype.slice.call(skillList_Li);

  skillArr.forEach( e => {
    e.addEventListener('mouseover', event => {
      let id = event.target.id;

      callData('skill', 'web', id);
      skillsHeight();
    })
  })
}


// // HBG Btn
// const hbg = () => {
//   const
//       hamburgerBtn = document.getElementById('hamburgerBtn'),
//       hbg = document.getElementById('hbg'),
//       navList = document.getElementById('navList');

//   hamburgerBtn.addEventListener('click', () => {
//     setAriaExpanded(hamburgerBtn);
//     setAriaExpanded(hbg);
//     setAriaExpanded(navList);
//   })
//   closeButton.onclick = () => {
//     setAriaExpanded(hamburgerBtn);
//     setAriaExpanded(hbg);
//     setAriaExpanded(navList);
//   }
// }

// スクロールでのエフェクト(フェード)
const scrollEvent = () => {
  const pageTittle = document.getElementById('pageTittle');
  const skillsSection = document.getElementById('skillsSection');
  const skillsAppendContent = document.getElementById('skillsAppendContent');
  const portFolioSection = document.getElementById('portFolioSection');
  const profileSection = document.getElementById('profileSection');

const cb = (entries, observer) => {
  entries.forEach( entry => {
    if(entry.isIntersecting){

      entry.target.classList.add('inview')
      // observer.unobserve(entry.target);//止める

    } else {
      entry.target.classList.remove('inview');
    }
  })
}
const options = {
  rootMargin: "-200px 0px 0px 0px",
}


  const io = new IntersectionObserver(cb, options);
  io.observe(pageTittle)
  io.observe(profileSection)
  io.observe(skillsSection)
  io.observe(skillsAppendContent)
  io.observe(portFolioSection)
}


// スクロールボタンの切り替え
const toggleScrollBtn = () => {
  let pageHeight;
  let nowScroll;

  window.onscroll = function() {

    nowScroll = window.pageYOffset
    pageHeight = document.body.scrollHeight;

    if ( nowScroll < pageHeight / 2 ) {
      currentLocation = 'lower'
    } else {
      currentLocation = 'upper'
    }

    setTimeout(setCL, 300)

    function setCL( nowScroll, pageHeight ) {

    }
    const scrollBtn = document.getElementById('scrollBtn');
    const scrollBtnRvs = document.getElementById('scrollBtnRvs');

    if ( currentLocation === 'lower' ) {
      scrollBtn.setAttribute('state','show')
      scrollBtnRvs.setAttribute('state','hide')

    } else {
      scrollBtn.setAttribute('state','hide')
      scrollBtnRvs.setAttribute('state','show')
    }
  }
}