import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Curriculum } from "./pages/Curriculum";
import { Profiles } from "./pages/Profiles";
import { CurriculumContainer, PageContainer } from "./components/ui/Page";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageContainer />}>
                    <Route path="/" element={<Profiles />} />

                    <Route element={<CurriculumContainer />}>
                        <Route path="/curriculo/:slug" element={<Curriculum />} />
                    </Route>

                    <Route path="/teste" element={<button>Botão Para download</button>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}