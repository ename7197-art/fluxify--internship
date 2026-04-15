function Avatar({ imageUrl, name }) {
  return (
    <div className="flex justify-center mb-4">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
          {name.charAt(0)}
        </div>
      )}
    </div>
  )
}

export default Avatar