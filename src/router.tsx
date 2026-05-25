import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Curriculum } from "./pages/Curriculum";
import { CurriculumContainer, PageContainer } from "./components/ui/Page";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageContainer />}>
                    <Route element={<CurriculumContainer />}>
                        <Route path="/" element={<Curriculum />} />
                    </Route>

                    <Route path="/teste" element={<button>Botão Para download</button>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}