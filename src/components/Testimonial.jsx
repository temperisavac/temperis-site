export default function Testimonial({ text, name }) {
  return (
    <div className="p-6 bg-white rounded-2xl border shadow-sm">
      <p className="text-gray-700">“{text}”</p>
      <div className="mt-4 font-semibold">— {name}</div>
    </div>
  )
}
