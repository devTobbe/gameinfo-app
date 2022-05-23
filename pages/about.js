import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <a id="top"></a>
      <div className="flex flex-col bg-zinc-900">
        <Navbar />
        <div className="py-8 text-center basis-2/5">
            <h1 className="text-2xl text-slate-50 font-Rubik">
                About
            </h1>
            <h4 className="text-accent text-1xl font-Roboto">
              What is GameBargain?
            </h4>
        </div>
        <div className="flex justify-center m-6">
            <div className="md:h-[3200px] md:w-[704px] xl:h-[2250px] xl:w-[1056px] 2xl:h-[1670px] 2xl:w-[1408px]">
                <h2 className="my-3 text-xl text-center text-slate-50 font-Rubik sm:text-left">
                    Summary
                </h2>
                <p className='text-base text-slate-50 font-Roboto'>
                    The purpose of this project was to create a web application that helps users find the PC video games they desire for the cheapest price.
                    In our web app, users can search for the games they want, and/or use filters, and then our web app display information about that game. When
                    a user hovers over a game, the app will also gather data about where to find that game for the cheapest price, and will help redirect the user to 
                    that game store if it is available.

                    This web app is built in the frontend framework Next.js, styled using Tailwind CSS. The video game data is fetched from two separate API:s where
                    one API serves data regarding video game information and one API serves video game price deals. More info regarding these API:s are shown below.
                </p>
                <h2 className="my-3 text-xl text-center text-slate-50 font-Rubik sm:text-left">
                    The Data
                </h2>
                <p className='mb-2 text-base text-slate-50 font-Roboto'>
                    The first API that serves video game information is the
                    <a
                    className='text-accent'
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://rawg.io/apidocs"> RAWG Video Games Database API
                    </a>
                    . RAWG is the largest video game database and game discovery service, and they allow other developers to use their API for free. The API offers 
                    an extensive amount of video game data such as descriptions, ratings, average playtime and much more.
                </p>
                <p className='text-base text-slate-50 font-Roboto'>
                    The second API that serves video game deals is the
                    <a
                    className='text-accent'
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://apidocs.cheapshark.com/"> CheapShark API
                    </a>
                    . CheapShark is a price comparison website for digital PC Games. They keep track of prices across multiple stores such as Steam, GreenManGaming and many
                     others. CheapShark offer their fully documented public API for developers to use pricing data, where their only condition is that you use their referral
                     links when it comes to sending users to deals, as this helps them pay for hosting and development.
                </p>
                <h2 className="my-3 text-xl text-center text-slate-50 font-Rubik sm:text-left">
                    Areas of Improvement
                </h2>
                <p className='text-base text-slate-50 font-Roboto'>
                    Currently our web app can't gather pricing data about all the games fetched from the RAWG API. This is because the naming convention of specific video
                    games between the two API:s are different. Another limitation is that CheapShark only has data of PC games, so our use of the extensive multi-platform
                    video game database from RAWG is limited to only PC games in our app.
                </p>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default About