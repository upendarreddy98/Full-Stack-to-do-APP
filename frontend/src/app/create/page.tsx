'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTodos } from '@/contexts/TodoContext'

export default function CreateTask() {
  const router = useRouter()
  const { createTodo } = useTodos()
  const [title, setTitle] = useState('')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      alert('Title is required')
      return
    }

    setLoading(true)

    try {
      await createTodo({
        title: title.trim(),
        color: selectedColor,
      })

      router.push('/')
    } catch (error) {
      console.error('Error creating task:', error)
      // Error handling is done in context, but we can show user feedback
      alert('Failed to create task. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const colors = [
    { name: 'Red', value: 'red', class: 'bg-red-500' },
    { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
    { name: 'Yellow', value: 'yellow', class: 'bg-yellow-500' },
    { name: 'Green', value: 'green', class: 'bg-green-500' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
    { name: 'Purple', value: 'purple', class: 'bg-purple-500' },
    { name: 'Pink', value: 'pink', class: 'bg-pink-500' },
    { name: 'Gray', value: 'gray', class: 'bg-gray-500' },
    { name: 'Brown', value: 'brown', class: 'bg-amber-700' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Clean header with rocket icon and gradient text */}
      <div className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            {/* Rocket Icon - Matching your shared image */}
            <div className="w-10 h-10 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center relative">
              {/* Rocket body */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L8 6V14L12 18L16 14V6L12 2Z" fill="white" />
                <circle cx="12" cy="8" r="1" fill="#3B82F6" />
                <path d="M10 18L8 22L10 20L12 22L14 20L16 22L14 18" fill="#F97316" />
              </svg>
            </div>

            {/* Gradient Text */}
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Todo App
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-blue-400 font-medium mb-4">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex. Brush you teeth"
              maxLength={255}
              disabled={loading}
              required
            />
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-blue-400 font-medium mb-4">
              Color
            </label>
            <div className="flex gap-4 justify-center flex-wrap">
              {colors.map((colorOption) => (
                <button
                  key={colorOption.value}
                  type="button"
                  onClick={() => setSelectedColor(colorOption.value)}
                  className={`
                    w-12 h-12 rounded-full ${colorOption.class} transition-all duration-200 border-4
                    ${selectedColor === colorOption.value
                      ? 'border-white scale-110'
                      : 'border-transparent hover:scale-105'
                    }
                  `}
                  title={colorOption.name}
                  disabled={loading}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-3"
          >
            <span>Add Task</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
