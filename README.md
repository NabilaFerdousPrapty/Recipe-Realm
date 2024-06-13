# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Recipe App

Welcome to the Recipe App! named Recipe Realm This app allows users to explore delicious recipes, mark their favorite ones, and track their cooking progress. Let's dive into the details:
## live link
netlify live link:https://chefreciperealm-using-react.netlify.app/

## Features

1. **Recipe Cards**:
   - Recipes are fetched from a local `recipe.json` file.
   - Each recipe is displayed as a card with details like name, ingredients, and cooking instructions.

2. **Want to Cook**:
   - Users can click the "Want to Cook" button on a recipe card.
   - The selected recipe is added to the "Want to Cook" section.

3. **Currently Cooking**:
   - When a user starts preparing a recipe, they can click the "Preparing" button.
   - The recipe is moved from the "Want to Cook" section to the "Currently Cooking" section.

4. **Calories and Cooking Time**:
   - The app calculates the total calories and cooking time for all recipes in the "Currently Cooking" section.
   - Display this information to the user.

## Usage

1. Clone this repository:
   ```bash
   git clone 
2. Install dependencies:

  npm install 

3. Start the development server:

npm run dev
4. Open localhost

## Contributing
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

