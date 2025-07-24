# React + TypeScript + Vite

# 🍳 Chef-Claude

An intelligent recipe generator that transforms your available ingredients into delicious meals using Claude AI. Simply input what you have in your kitchen, and let AI create a personalized recipe just for you!

## ✨ Features

- 🧠 **AI-Powered Recipe Generation** - Leverages Claude AI to create custom recipes
- 📝 **Smart Ingredient Input** - Easy-to-use form for entering available ingredients
- ⚡ **Instant Recipe Creation** - Get personalized recipes in seconds
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface built with React
- 🚀 **Fast Performance** - Powered by Vite for lightning-fast development and builds

## 🛠️ Built With

- **Frontend**: React.js
- **Build Tool**: Vite
- **AI Integration**: Claude AI API
- **Styling**: CSS3/Modern CSS
- **Package Manager**: npm/yarn

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Claude AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chef-claude.git
   cd chef-claude
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your Claude AI API key to the `.env` file:
   ```
   VITE_CLAUDE_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the app

## 📖 How to Use

1. **Enter Your Ingredients**: Type in the ingredients you have available in your kitchen
2. **Click "Get Recipe"**: Submit your ingredients to generate a custom recipe
3. **Enjoy Your Meal**: Follow the AI-generated recipe to create something delicious!


## 🎯 Key Features

### Intelligent Recipe Matching
Chef-Claude analyzes your available ingredients and creates recipes that maximize their use while suggesting complementary flavors and cooking techniques.

### Personalized Suggestions
The AI considers ingredient combinations, cooking methods, and dietary preferences to generate recipes tailored to your specific situation.

### User-Friendly Interface
Clean, modern design makes it easy to input ingredients and view generated recipes on any device.

## 🧪 What I Learned

- **AI API Integration**: Implementing Claude AI API for natural language processing
- **React.js Best Practices**: Component architecture and state management
- **Vite Configuration**: Modern build tooling and development experience
- **User Experience Design**: Creating intuitive interfaces for AI-powered applications
- **API Error Handling**: Robust error handling for external API calls

## 🔮 Future Enhancements

- [ ] Save favorite recipes to local storage
- [ ] Dietary restriction filters (vegetarian, vegan, gluten-free)
- [ ] Cooking time and difficulty estimates
- [ ] Shopping list generation for missing ingredients
- [ ] Recipe rating and feedback system
- [ ] Ingredient substitution suggestions
- [ ] Meal planning integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

