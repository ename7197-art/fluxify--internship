function Badge({ isAvailable }) {
  // Conditional rendering: shows badge only when isAvailable is true
  if (!isAvailable) {
    return null
  }
  
  return (
    <div className="mt-3">
      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
        ✅ Available for hire
      </span>
    </div>
  )
}

export default Badge