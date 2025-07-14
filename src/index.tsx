import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";


const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<Counter/>);
}

