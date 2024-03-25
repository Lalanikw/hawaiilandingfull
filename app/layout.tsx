"use client"

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import ChatBot from '../components/ChatBot'

const raleway = Raleway ({subsets:['latin']})

 const metadata = {
  title: 'Hawaii | Travel Information',
  description: 'Hawaii travel information site. Search for places to see, stay and eat. Read about the history and current situation of the Island. Plan for weddings, events and photography. Reach out for trip tips from locals'
 }

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
  }) {

  return (
    <>
      <html lang="en">
        <head>
<<<<<<< HEAD
           <title>{metadata.title}</title>
=======
         <title>{metadata.title}</title>
>>>>>>> d6cf09985549a064206636d446189c9341cf9bed
          <meta name="description" content={metadata.description} />
          
          <link rel="icon" href='/logo.jpg'/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Klee+One:wght@600&family=Raleway:ital,wght@0,100..900;1,100..900&family=Reggae+One&display=swap" rel="stylesheet">
          </link>
           
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
          <style>
            {`
              df-messenger {
                --df-messenger-bot-message: #0D47A1;
                --df-messenger-button-titlebar-color: #000000;
                --df-messenger-chat-background-color:  000000;
                --df-messenger-font-color: white;
                --df-messenger-send-icon: #000000;
                --df-messenger-user-message: #479b3d;
              }
            `}
          </style>
          </head>

        <body className={raleway.className} >

                    <Header/>
                    {children}
          <Footer />
          <ChatBot/>

            </body>
      </html>

      </>
  )
}
