# Contributing

- [Development](#development)
  - [Getting Started](#getting-started)
- [IDE](#ide)
  - [Visual Studio Code](#visual-studio-code)

## Development

### Getting Started

```sh
yarn
```

## IDE

### Visual Studio Code

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
