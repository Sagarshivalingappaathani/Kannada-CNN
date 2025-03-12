import { CanvasDrawing } from "@/components/CanvasDrawing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Kannada Handwritten Alphabet Recognition</h1>
      <CanvasDrawing />
    </main>
  );
}