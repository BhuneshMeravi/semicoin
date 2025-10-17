

export default function FeatureCard({ title = "Feature" }){
  return (
    <div className="p-5 card h-full flex flex-col justify-between">
      <div>
        <div className="text-sm text-gray-400">Use Case</div>
        <h4 className="text-lg font-bold mt-2">{title}</h4>
        <p className="text-sm text-gray-300 mt-3">Short description goes here. You can paste in the real use case explanation.</p>
      </div>
      <div className="mt-4 text-xs text-gray-500">Learn more →</div>
    </div>
  );
}
