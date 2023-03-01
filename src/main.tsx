import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.scss'
import {FaqPage} from "@/views/Faq/FaqPage";
import {ContainerPage} from "@/views/Container/ContainerPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FaqPage />
    <ContainerPage />
  </React.StrictMode>,
)
