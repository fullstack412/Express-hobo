import React from 'react';
import Product from '../components/product';
import Service from '../components/service';
import Contact from '../components/contact';
import '../styles/index.scss'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://gist.githubusercontent.com/hoonio/eb011950b60e13a016085023203d579c/raw/cf547a0fed04645229f083d206d0b3b12f02823c/home', {
      headers: {
        'content-type': 'application/json'
      }
    })
    // const json = await res.json()
    // console.log(json)
    // const content = JSON.parse(json.files.homepage.content)
    // console.log(content.services)
    return { contents: await res.json() }
  }

/*  constructor(props) {
    super(props);
    this.props.content = {
      slogan: 'Bridging the gap between ideas and technology',
      company: 'Turning your ideas into technical implementation',
      services: [
        {
          'heading': 'Web Development',
          'body': 'HTML|CSS, JavaScript (React, Node.js, AngularJS) programming, hosting|cloud deployment, CMS configuration, social media integration',
        },
        {
          'heading': 'Online Marketing',
          'body': 'Search Engine Optimization, Google Analytics/Tag Manager configuration, Google AdWords/Facebook Ads campaign setup and reporting',
        },
        {
          'heading': 'Consultancy Services',
          'body': 'Extra services available upon request: data visualization, mobile applications development, financial analysis, graphic design, et cetera',
        },
      ],
      products: [
        {
          'heading': 'Feria cum Hoonio',
          'body': 'Recitals by and with Hoonio, with vision to deliver music in order to enlighten the audience, provide a different angle on their view on the world we live in, and foundation for musicians of next generation to proactively pursue their passion.<br /><a href="http://hoon.io/feriaApp"><img class="appstore-badge" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png" width="135px"/></a>',
          'target': 'http://feria.hoonio.com',
          'img': 'https://lh3.googleusercontent.com/mvwsxK_jpFHLoteeScrcnP1_D1dIO_mv92oyy5AhXDZ8DQ9rOMVI9FajP6dt32Yma9CHr59NbsQStRuyQN2GzU764EHtgjSxRqpkkw=w569-h320-rw-no',
          'imageOn': 'right',
        },
        {
          'heading': 'AgeWatch Index',
          'body': 'Data visualization for HelpAge International which aims to support elderly around the globe. The work was featured in press coverage by <a target="_blank" title="Best and worst places to be old: interactive map" href="http://bit.ly/19YDIBV">The Guardian</a> and <a target="_blank" title="Lepiej niż w Polsce seniorom żyje się w Albanii, na Litwie czy Białorusi. Najgorzej jest z opieką zdrowotną Cały tekst" href="http://bit.ly/1fIVwIv">Wyborcza.pl</a>',
          'target': 'http://www.helpage.org/global-agewatch/population-ageing-data/global-rankings-map',
          'img': 'https://lh3.googleusercontent.com/-TzWilRcgbbc/UktfVGEL8oI/AAAAAAAB5Sk/cPk3nN6PWOo/w980-h551/frontcover-agewatch.jpg',
          'imageOn': 'left',
        },
        {
          heading: 'Densha de Tokyo',
          body: 'iOS application providing comprehensive guide for Tokyo Metropolitan Transit System, covering additional rail services including JR and major private lines. <br /><a href="http://hoon.io/1DWTTNa"><img class="playstore-badge" src="https://devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store-jp.svg" /></a>',
          target: 'http://hoon.io/1DWTTNa',
          img: 'https://lh3.googleusercontent.com/-sQSx-LtdT3g/VcaHUL1Z2oI/AAAAAAACjxo/Sr3OXnVK2Og/s800-Ic42/denshadetokyo.jpg',
          imageOn: 'right',
        },
      ],
      contact: {
        heading: 'Contact Us',
        body: 'Please fill out the form for any requests and inquiries, we will return to you shortly. Thank you',
        url: 'https://docs.google.com/a/hoonio.com/spreadsheet/formResponse?key=0Aum0r5zaOGMjdHFBSG9wb3p6NjJhdm02MGxoZU9heXc',
      },
    };
  }
*/
  render() {
    console.log(this.props.contents)
    return (
      <div id="home">
        <header>
          <div className="intro-text">
            <p>{this.props.contents.slogan}</p>
          </div>
        </header>
        <section id="services">
          <div className="container">
            <div className="row" id="who-we-are">
              <div className="col-sm-12 text-center">
                <h2 className="section-heading text-muted">{this.props.contents.company}</h2>
              </div>
            </div>
            <div className="row text-center" id="what-we-do">
              {this.props.contents.services.map((service, index) => (<Service serv={service} key={index} />))}
            </div>
          </div>
        </section>
        <section id="products">
          {this.props.contents.products.map((product, index) => (<Product prod={product} key={index} />))}
        </section>
        <section id="contact">
          <Contact form={this.props.contents.contact} />
        </section>
      </div>
    );
  }
}
