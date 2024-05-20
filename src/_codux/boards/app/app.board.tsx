import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <div className="rounded bg-green-600">
            <App />
        </div>
    ),
    environmentProps: {
        windowWidth: 1598,
        windowHeight: 768,
        windowBackgroundColor: '#cccccc',
        canvasBackgroundColor: '#cccccc',
        canvasWidth: 297.6666666666667,
        canvasHeight: 652,
    },
});
