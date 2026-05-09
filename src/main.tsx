import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CurriculumContainer, PageContainer } from './components/ui/Page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageContainer>
      <CurriculumContainer>
        <App />
      </CurriculumContainer>
    </PageContainer>
  </StrictMode>
)
