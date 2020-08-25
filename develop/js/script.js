// /* ==========================
//   Imports
// =========================== */

const Tech = require("../json/data.json");
import {Person} from "./_class";
import {isIE ,noIE} from "./_noIE";


// /* ==========================
//   Global Variables / Objects
// =========================== */


// 山田オブジェクト (ここの入れ替えで他の人のページにもなる、というテイ)
let Yamada = new Person()

Yamada = {
  profile: {
          name: '<ruby><rb>山田</rb><rp>(</rp><rt>ヤマダ</rt><rp>)</rp><ruby>&nbsp;<ruby><rb>将登</rb><rp>(</rp><rt>マサト</rt><rp>)</rp><ruby>',
          birth: '1985年11月5日生',
          comment: `
          &nbsp;大学・専門学校卒業後、約9年間レコーディングエンジニアとして働く。主に音楽業界、広告業界において、多くのプロデューサーやミュージシャン、アーティストとの仕事を経験し、その真摯に取り組む姿勢と、最後までやり遂げる気概が評価され、活躍する。<br>
          &nbsp;2019年、転機を迎え、「人生は一度きり、大きく挑戦するならこれは最後のチャンス！」と考え、サウンドのエンジニアからWebのエンジニアへの転身を決意する。<br>
          &nbsp;プログラミングスクールおよび独学で技術を学び、現在活躍の場を探索中。`
      },
  skill: {
          pc: {
            os: [
              'Mac',
              'Windows'
            ],
            software: [
              'DAW (主にProTools、プロフェッショナルレベル)',
              'Office(word, excel, power point)',
              '映像編集(メジャーなもの、基礎レベル)',
              '画像編集(Photoshop, Illustrator 基礎レベル)'
            ]
          },
          other: ['RecordingEngineer & Mixer', '制作プランニング'],
          web: {
                html       : '以前にも何度か使用経験はありましたが、TECH::EXPERTにて基礎を学習し直し、現在も日々理解を進めています。',
                haml       : 'TECH::EXPERTにて学習しました。<br>Railsの開発時に使用しています。問題なく使用できる言語です。',
                pug        : 'スクール終了後、独学にて学習しました。問題なく使用できます。',
                css        : '以前にも何度か使用経験はありましたが、TECH::EXPERTにて基礎を学習し直し、現在も日々理解を進めています。',
                sass       : 'TECH::EXPERT及び、個人で学習しています。<br>@mixinと@extendの使い分けや、作業を効率化できる書き方を意識して、日々理解を進めています。',
                js         : '主にスクール修了後、個人で学習しています。<br>自分が一番好きな言語です。<br>当サイト、<a href="https://hiragana-de-porker.web.app/">ひらがなポーカー</a>、<a href="https://count--down.web.app/">CountDown</a>、<a href="https://github.com/ymdma/teacher-search-module">教員検索</a> 等、頻繁にアウトプットを行なっています。',
                jQuery     : 'DOM操作やAPI、ajaxなど。TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。',
                vue        : '独学にて学習しました。<br>TODOアプリ / シンプルなAPIを使うアプリを作るなどアウトプットを行いました。(vue-cli含む)',
                nuxt       : '独学にて学習しました。<br>TODOアプリ(Firestore連携) / シンプルな外部APIを使うアプリを作るなどアウトプットを行いました。',
                ruby       : 'TECH::EXPERTにて学習しました。フレームワークは、Ruby on Railsの使用経験があります。',
                rails      : 'TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。',
                php        : '少しですが、独学にて学習。<br>DAOを用いたスクラッチでのMVCアプリケーションの作成などアウトプットしつつ学びました。<br>XAMP、MAMPは使用経験あり。',
                wordPress  : '個人事業主時代に集客目的で運用経験あり。XAMP,MAMP、レンタルサーバー上での環境構築の経験あり。<br>（Web技術全体の理解を深める為に試しました。）',
                slack      : '使用できます。',
                git        : 'TECH::EXPERTにて学習しました。 <a href="https://github.com/ymdma/"><br>ID:ymdma</a>',
                gitHub     : 'TECH::EXPERTにて学習しました。 <a href="https://github.com/ymdma/"><br>ID:ymdma</a>',
                sourcetree : '元々GitHubDesktopやVSCを使用していたため、最近少しずつ慣れている所です。',
                nginx      : 'TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)',
                mysql      : 'TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)',
                webpack    : '独学にて学習しました。<br>基本的な使用ができます。<br>現在よく使う構成は、Pug、Sass、JS、そしてタスクランナーにglobuleです。',
                docker     : 'composeからの構築程度で、初級レベルです。',
                aws        : 'TECH::EXPERTチーム開発(<a href="http://13.115.148.93/">mercariコピーサイト</a>)、個人での開発(<a href="http://52.193.98.166/">GroupBlog</a>)等にて使用しました。<br> 構成: nginx MySQL AWS EC2/S3(画像)',
                firebase   : '簡単なアプリケーションを作った際、DBにFirestoreを使用してみたり、<br>フロントで完結するアプリやサイトをHostingを使ってアップしています。'
          },
          portfolio: {
                mercari: {
                        title  : 'mercari (copy)',
                        url    : 'http://13.115.148.93/',
                        gitHub : 'https://github.com/ymdma/freemarket_sample_60c',
                        image    : '/assets/images/thumbs/thumb_mercari.png',
                        comment: '[ Basic認証 ID:mercari PASS:1031 ]<br><br>TECH::EXPERTでのチーム開発（4人）にて制作しました。<br>メルカリのクローンサイトを制作し、スクラムを組んでのアジャイル開発を経験しました。<br>主な担当箇所としては、要件定義、DB設計、Pay.jp(開発環境)、 SNS認証(開発環境) 等です。'
                },
                groupBlog: {
                        title  : 'GroupBlog',
                        url    : 'http://52.193.98.166/',
                        gitHub : 'https://github.com/ymdma/group_blog',
                        image    : '/assets/images/thumbs/thumb_GroupBlog_create-group.png',
                        comment: 'グループ機能を持ったショートブログ共有アプリケーション。<br>ページ遷移を制限するため、indexに機能を集めました。その為Ajaxを多用しています。'
                },
                hiraganaPorker: {
                        title  : 'ひらがなポーカー',
                        url    : 'https://hiragana-de-porker.web.app/',
                        gitHub : 'https://github.com/ymdma/hiragna-porker',
                        image    : '/assets/images/thumbs/thumb_hiragana.png',
                        comment: '初めて作ったJavaScriptによるゲーム。<br>ひらがなを使ったカードゲームを２人プレイ用のJavaScriptゲームで再現しました。<br>面白い言葉を作った方が勝ち！'
                },
                countDown: {
                        title  : 'countDown',
                        url    : 'https://count--down.web.app/',
                        gitHub : 'https://github.com/ymdma/count-down',
                        image    : '/assets/images/thumbs/thumb_CountDown.png',
                        comment: 'JavaScriptによるミニゲーム。<br>1から25までの数字を順番にクリック（タップ）していき、早いタイムを目指すゲームです。<br>よりよいコードを書けるように、可読性やメンテナンス性を高めるなど意識しました。'
                }
                // searchTeacher: {
                //         title  : '教員検索',
                //         url    : '#',
                //         gitHub : 'https://github.com/ymdma/teacher-search-module',
                //         comment: ''
                // }
          }
  }
};

let arg = Yamada;


// /* ==========================
//   読み込み DOMContentLoaded
// =========================== */

document.addEventListener("DOMContentLoaded", () => {
  hbg();
  noIE();
  appendSkillList();
  skillShow();
  appendProf();
  profileHeight();
  toggleScrollBtn();
  scrollEvent();
  scrollBtnMove();
  scrollFromNav();
  scrollUpBtnMove();
  buildPortfolios();
});




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


function setAriaExpanded(target) {

  const checkProp = target.getAttribute('aria-expanded');

  if ( checkProp === 'true' ) {
    target.setAttribute('aria-expanded', false );
  }
  else {
    target.setAttribute('aria-expanded', true );
  }
};


// /* ==========================
//   Functions メイン処理
// =========================== */


// portfolios オブジェクトよりappend
const buildPortfolios = () => {

  const portfolios = Yamada.skill.portfolio;  // 固有のものを使ってしまっている=>グローバル変数から引っ張るようにする
  const portfolioAppendTargetArea = document.getElementById('portfolioAppendTargetArea');

  Object.keys(portfolios).forEach( data => {

    const portfolioOne = document.createElement('a');

    portfolioOne.classList.add('c-portfolio');
    portfolioOne.setAttribute('id', `${data}` );
    portfolioOne.setAttribute('href', `${portfolios[data].url}` );
    portfolioOne.setAttribute('title', 'ポートフォリオサイトへのリンク' );
    portfolioAppendTargetArea.appendChild(portfolioOne);

    pushContent( `${data}`, portfoliosHTML(data) );
  })
}



// portfolios
function portfoliosHTML(data) {

  let
      url = Yamada.skill.portfolio[data].url,
      title = Yamada.skill.portfolio[data].title,
      image = Yamada.skill.portfolio[data].image,
      comment = Yamada.skill.portfolio[data].comment;
            // 固有のものを使ってしまっている=>グローバル変数から引っ張るようにする

  return `<a class="c-portfolio" href="${url}" title="ポートフォリオサイトへのリンク">
            <div class="c-portfolio__title-wrap">
              <h2>${title}</h2>
            </div>
            <div class="c-portfolio__thumb-wrap">
              <img src="${image}"  alt="portfolio-image">
            </div>
            <p class="c-portfolio__comment">${comment}</p>
          </a> `;
};


// HTMLにプッシュ
const pushContent = (target, str) => {

  document.getElementById(target).innerHTML = str;

};



// ***** Skills ***** //

// 個々のスキルへのコメントの表示
const skillShow = () => {

  const skillList_Li = document.querySelectorAll(' #skillList > li ');
  const skillArr = Array.prototype.slice.call(skillList_Li);

  skillArr.forEach( e => {
    e.addEventListener('mouseover', event => {
      let id = event.target.id;

      pushContent( 'skillAppendTargetArea', skillsHTML(id) );

      skillsHeight();
    })
  })
};


// Skills appendするHTMLを生成
function skillsHTML(key) {

  let techName = Tech[key].name;
  let techLogoUrl = Tech[key].logo;
  let comment = Yamada.skill.web[key]; // 固有のものを使ってしまっている=>グローバル変数から引っ張るようにする

  return `<div>
            <p class="name" role="title">${techName}</p>
            <p class="logo"><img src="${techLogoUrl}"></p>
          </div>
          <p class="comment">${comment}</p>`;
};



// Skill list をappend
const appendSkillList = () => {

  const webSkill = Yamada.skill.web; // 固有のものを使ってしまっている=>グローバル変数から引っ張るようにする
  const skillList = document.getElementById('skillList');

  Object.keys(webSkill).forEach( key => {

    let logoURL = Tech[`${key}`]['logo'];
    let newLi = document.createElement('li');

    newLi.setAttribute('alt',`${key}_logo-image`);
    newLi.id = `${key}`;
    newLi.style.backgroundImage = `url(${logoURL})`;
    skillList.appendChild(newLi);
  })
};



// ***** profile ***** //

const appendProf = () => {

  const prof = Yamada.profile; // 固有のものを使ってしまっている=>グローバル変数から引っ張るようにする
  const profList = document.getElementById('profList');
  let li;

  Object.values(prof).forEach( e => {
    li = document.createElement('li');
    li.innerHTML = `${e}`;
    profList.appendChild(li);
  });
};

// profile のheight自動追従 リサイズ時用
window.addEventListener('resize',() => profileHeight() );

// Skills leftBox のheight自動追従 リサイズ時用
window.addEventListener('resize',() => skillsHeight() );

// profile のheight自動追従 (DOMContentLoaded・window/resize より呼出)
const profileHeight = () => {

  const profLeft = document.getElementById('profile-left');
  let myDataHeight = document.getElementById('myData').clientHeight;

  setTimeout( fitHeight (profLeft, myDataHeight), 200);
};

// profile のheight自動追従 (DOMContentLoaded・window/resize より呼出)
const skillsHeight = () => {

  const skillsLeft = document.getElementById('skillsLeft');
  let skillDisplayHeight = document.getElementById('skillsRight').clientHeight;

  setTimeout( fitHeight (skillsLeft, skillDisplayHeight), 200);
};

// heightを設定
function fitHeight(target, size) {
  target.style.height = `${size}px`;
};





// ***** HBG Button ***** //
const hbg = () => {

  const
      hamburgerBtn = document.getElementById('hamburgerBtn'),
      hbg = document.getElementById('hbg'),
      navList = document.getElementById('navList');

  hamburgerBtn.addEventListener('click', () => {
    setAriaExpanded(hamburgerBtn);
    setAriaExpanded(hbg);
    setAriaExpanded(navList);
  })

};


// ***** Scroll Animation ***** //

// スクロールでのエフェクト(フェード) *IEの場合反映されない
const scrollEvent = () => {

  const
      pageTitle           = document.getElementById('pageTitle'),
      description          = document.getElementById('description'),
      skillsSection        = document.getElementById('skillsSection'),
      skillsAppendContent  = document.getElementById('skillsAppendContent'),
      portfoliosSection    = document.getElementById('portfoliosSection'),
      profileSection       = document.getElementById('profileSection');

  if ( isIE() ) {
  // IEの場合セットしてあるopacityを戻す
    pageTitle.style.opacity          = '1';
    description.style.opacity         = '1';
    skillsSection.style.opacity       = '1';
    skillsAppendContent.style.opacity = '1';
    portfoliosSection.style.opacity   = '1';
    profileSection.style.opacity      = '1';

  }
  // IE以外
  else {

    const cb = (entries, observer) => {
      let sectionTitle;
      let t;
      entries.forEach( entry => {
        t = entry.target.id
        sectionTitle = document.querySelector(`#${t} > h1`);
        // console.log(sectionTitle)
        if( entry.isIntersecting ) {
          entry.target.classList.add('inview');
          if ( sectionTitle ) {
            sectionTitle.classList.add('is-active');
          }

          // observer.unobserve(entry.target);//止める
        } else {
          entry.target.classList.remove('inview');
          if ( sectionTitle ) {
            sectionTitle.classList.remove('is-active');
          }
        }
      })
    }

    //optionの設定
    const options = { rootMargin: "-100px 0px 0px 0px" }; //適用範囲

    // インスタンスの作成
    const io = new IntersectionObserver(cb, options);
    // 要素を登録
    io.observe(pageTitle);
    io.observe(description);
    io.observe(profileSection);
    io.observe(skillsSection);
    io.observe(skillsAppendContent);
    io.observe(portfoliosSection);
  }
};



// スクロールボタンの切り替え
  // （上の方か下の方かを検知してスクロールボタンの表示を変更）
const toggleScrollBtn = () => {

  let pageHeight;
  let nowScroll;
  let winHeight;

  window.onscroll = () => {
    pageHeight = document.body.scrollHeight;
    nowScroll = window.pageYOffset;
    winHeight = window.innerHeight;

    if ( nowScroll >= pageHeight - winHeight ) {
      scrollBtn.setAttribute('state', 'hide');
      scrollBtnRvs.setAttribute('state', 'show');
    } else {
      scrollBtn.setAttribute('state', 'show');
      scrollBtnRvs.setAttribute('state', 'hide');
    }
  }
};


// scrollBtnDown
const scrollBtnMove = () => {

  let manuallyDownScroll;
  const scrollBtn = document.getElementById('scrollBtn');

  scrollBtn.addEventListener('mouseenter', () => {
    manuallyDownScroll = setInterval(manuallyScroll, 100);
  })
  scrollBtn.addEventListener('mouseleave', () => {
    clearInterval(manuallyDownScroll);
  })

  function manuallyScroll() {
    window.scrollBy( {
      top: 50,
      behavior: "smooth"
    });
  };
};

const scrollUpBtnMove = () => {

  const scrollBtnRvs = document.getElementById('scrollBtnRvs');

  scrollBtnRvs.addEventListener('click', () => {
    setTimeout( () => {
      window.scrollTo( {
        top: 0,
        behavior: "smooth"
      });
    })
  });
};

// navからのスクロール
const scrollFromNav = () => {
  const
      toProfile         = document.getElementById('toProfile'),
      profileSection    = document.getElementById('profileSection'),
      toSkills          = document.getElementById('toSkills'),
      skillsSection     = document.getElementById('skillsSection'),
      toPortfolios      = document.getElementById('toPortfolios'),
      portfoliosSection = document.getElementById('portfoliosSection');

  toProfile.onclick = () => {
    scrollToElement(profileSection);
  }
  toSkills.onclick = () => {
    scrollToElement(skillsSection);
  }
  toPortfolios.onclick = () => {
    scrollToElement(portfoliosSection);
  }
};

// navからのスクロール
function scrollToElement(arrEle) {

  let rect = arrEle.getBoundingClientRect();
  let y = rect.top - 85;

  window.scrollBy({
    top: y,
    behavior: "smooth"
  });
};
