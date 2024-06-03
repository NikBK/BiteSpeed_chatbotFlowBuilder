# BiteSpeed Chatbot Flow Builder

## Overview

The BiteSpeed Chatbot Flow Builder is a React app built using ReactFlow that allows users to create and save chatbot flows. It provides a user-friendly interface where users can drag and drop different types of nodes into the flow to construct their chatbot conversation logic.

## Features

- **Node Panel**: Users can access a node panel where different types of nodes, such as MessageNode, InputNode, and DefaultNode, can be dragged and dropped into the flow.
- **Customizable Node Types**: The app is designed to support adding new node types in the future to enhance flexibility and customization.
- **Source and Target Handles**: Nodes have source and target handles that are used to create edges between nodes. Each source handle can only have one edge originating from it, while a target handle can have multiple edges connecting to it.
- **Settings Panel**: When a message node is selected, a settings panel becomes visible. This panel includes a text box that allows users to update the message of the selected message node.
- **Save Changes**: Users can save changes made to the chatbot flow using the 'Save Changes' button. An error will be displayed if more than one node has empty target handles, ensuring data integrity.
- **Toast Messages**: A toast message appears at the top right corner to indicate the status of the save changes operation, providing feedback to the user.

## Hosted App 



## Dependencies

The following dependencies are used in this project:

- React
- ReactFlow
- React-Toastify
- Other dependencies (listed in `package.json`)

