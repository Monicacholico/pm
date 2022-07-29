import '../scss/style.scss'
import javascriptLogo from '../assets/javascript.svg'
import { setupCounter } from './counter.js'

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {DrawSVGPlugin} from "gsap/dist/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/dist/MotionPathPlugin";
import {GSDevTools} from "gsap/dist/GSDevTools";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, GSDevTools);

GSDevTools.create();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <section>
  <div class=wrapper>
    <h3></h3>
  </div>
  </section>
`

setupCounter(document.querySelector('#counter'))
