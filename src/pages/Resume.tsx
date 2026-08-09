import About from '../components/About';
import Experience from '../components/Experience';

export default function Resume() {
  return (
    <div className="w-full flex flex-col items-center">
      <About />
      <Experience />
    </div>
  );
}
