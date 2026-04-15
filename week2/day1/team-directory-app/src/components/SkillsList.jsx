function SkillsList({ skills }) {
  // Conditional rendering: show message when skills array is empty
  if (!skills || skills.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
        <p className="text-yellow-700">⚠️ No items found — please add some skills or tools.</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">🛠️ Skills & Tools:</h4>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          // WHY REACT NEEDS A UNIQUE KEY PROP:
          // React uses keys to identify which items have changed, been added, or removed.
          // Without a unique key, React cannot efficiently update the DOM and may re-render all items.
          // Keys help React track each element's identity across re-renders, improving performance and preventing bugs.
          <li 
            key={index} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList