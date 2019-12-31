import '../styles/dash.scss'
import React, { useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Link from 'next/link';
import { CookiesProvider, useCookies, Cookies } from 'react-cookie';

const Dash = (ctx) => {
  const [pause, setPause] = useState(() => {
    Moment.startPooledTimer(30)
    return false
  })
  let [cookies, setCookies, removeCookies] = useCookies()
  if (ctx && ctx.cookie && ctx.cookie.cookies) cookies = ctx.cookie.cookies;
  const dateRound = (d) => {
    return d.toFixed(5);
  }
  const datePercentOfLife = (d) => {
    return (100 * d / (81 * 365)).toFixed(7);
  }
  const datePercentOfYear = (d) => {
    return (100 * moment().diff(moment(moment().get("year") + "-01-01")) / (moment().isLeapYear() ? 31622400000 : 31536000000)).toFixed(6);
  }
  const submitNotionAPIKey = () => {
    console.log(document.getElementById("api").value)
    setCookies("NOTION_API_KEY", document.getElementById("api").value, { secure: true });
  }
  let content;
  if (cookies.NOTION_API_KEY) {
    content = <div>
      <h1 className="tagline">
        Welcome to Day <Moment diff="1994-07-16T01:30-0500" decimal unit="days" filter={dateRound}></Moment> of {(81 * 365).toFixed(7)} (<Moment diff="1994-07-16T01:30-0500" decimal unit="days" filter={datePercentOfLife}></Moment>%)
      </h1>
      <p>It is currently day <Moment format="DDD [of the year] YYYY"></Moment>, and we are currently <Moment filter={datePercentOfYear}></Moment>% through the current year.</p>
      <h2>❤️ Health</h2>

      <p>Your last weight measurement was <b>83 kg (182 lb)</b>, on DD MMM YYYY. <b>Your weight measurement is overdue.</b></p>

      <p>Your last blood pressure measurement was 140/85, with a heart rate of 60 bpm. <b>Your blood pressure measurement is overdue.</b></p>

      <h2>🔥 Productivity</h2>

      <p>Your calendar's time is xxx% tracked, this week up until now, a xxx% change from last week's.</p>

      <p>You currently have xxx issues in your personal backlog, a xxx% change from last week.  **xxx of them are overdue.**</p>
      <a onClick={() => { Moment.clearPooledTimer(); setCookies('dash', 'ffff', { secure: true }) }}>pause</a>
      <Link href="dash"><a>refresh</a></Link>
      <a onClick={() => { removeCookies('dash'); removeCookies('NOTION_API_KEY') }}>clear cookies</a>
    </div>;
  } else {
    content = <div>
      <h1>Welcome to Richard's Dashboard.</h1>
      <p>Please enter your notion API key to continue.</p>
      <input id="api"></input>
      <a onClick={submitNotionAPIKey}>Submit</a>
    </div>;
  }
  return <CookiesProvider cookies={cookies}>
    {content}
  </CookiesProvider>
}
Dash.getInitialProps = async ctx => {
  if (ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie) return { 'cookie': new Cookies(ctx.req.headers.cookie) };
  return {};
}


export default Dash
