import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.scss'
import {FaqPage} from "@/views/Faq/FaqPage";
import {StopwatchPage} from "@/views/Stopwatch/StopwatchPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FaqPage />
    <StopwatchPage />
  </React.StrictMode>,
)
