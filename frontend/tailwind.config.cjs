module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'text-3xl', 'md:text-4xl', 'font-extrabold', 'text-gray-900', 'text-gray-600',
    'bg-blue-600', 'bg-blue-700', 'text-white', 'border', 'border-blue-600', 'text-blue-600',
    'hover:bg-blue-50', 'px-4', 'py-2', 'rounded-md', 'rounded-lg', 'shadow-md', 'max-w-2xl',
    'min-h-screen', 'flex', 'items-center', 'justify-center', 'mx-auto', 'p-8', 'mb-3', 'mb-6', 'gap-3'
  ],
  plugins: [],
}
