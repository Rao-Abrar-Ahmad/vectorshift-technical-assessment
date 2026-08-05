import PipelineUI from './PipelineUI';
import SubmitButton from './SubmitButton';
import { PipelineToolbar } from './toolbar';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
