'use client'

import Link from 'next/link'
import { TodoItem } from '@/components/TodoItem'

import { useTodos } from '@/contexts/TodoContext'

export default function Home() {
  const { todos, loading, error, toggleTodo, deleteTodo, clearError } = useTodos()

  const handleToggleTodo = async (id: number, completed: boolean) => {
    try {
      await toggleTodo(id, completed)
    } catch (error) {
      // Error is already handled in context
    }
  }

  const handleDeleteTodo = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTodo(id)
      } catch (error) {
        // Error is already handled in context
      }
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

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
        {/* Error Message */}
        {error && (
          <div className="bg-red-600 text-white p-3 rounded-lg mb-6 flex justify-between items-center">
            <span>{error}</span>
            <button onClick={clearError} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>
        )}

        {/* Create Task Button */}
        <Link href="/create">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 mb-8 flex items-center justify-center gap-3">
            Create Task
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </button>
        </Link>

        {/* Stats */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-blue-400">
            <span className="font-medium">Tasks</span>
            <span className="ml-2 bg-gray-700 px-2 py-1 rounded text-sm">{todos.length}</span>
          </div>
          <div className="text-purple-400">
            <span className="font-medium">Completed</span>
            <span className="ml-2 bg-gray-700 px-2 py-1 rounded text-sm">{completedCount} of {todos.length}</span>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-400 mb-2">You don't have any tasks registered yet.</p>
              <p className="text-sm text-gray-500">Create tasks and organize your to-do items.</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
