import { createRoot } from 'react-dom/client';

export function createComponentRoot() {
    const container = document.getElementById('root');
    const root = createRoot(container);
    return root;
}
