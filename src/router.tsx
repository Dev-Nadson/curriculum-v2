import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Curriculum } from "./pages/Curriculum";
import { CurriculumForm } from "./pages/CurriculumForm";
import { Profiles } from "./pages/Profiles";
import { CurriculumContainer, PageContainer } from "./components/ui/Page";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageContainer />}>
                    <Route path="/" element={<Profiles />} />

                    {/* Fora do CurriculumContainer: aquele container é a folha
                        A4 de impressão, e o formulário não é um documento.
                        "novo" é segmento estático, então tem prioridade sobre
                        :slug na resolução do react-router. */}
                    <Route path="/curriculo/novo" element={<CurriculumForm />} />
                    <Route path="/curriculo/:slug/editar" element={<CurriculumForm />} />

                    <Route element={<CurriculumContainer />}>
                        <Route path="/curriculo/:slug" element={<Curriculum />} />
                    </Route>

                    <Route path="/teste" element={<button>Botão Para download</button>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}