
### For users

1.`npm i `
2.`npm run dev`
3. Then go to [https://github.com/SAudrius/Type19_Last_Dance_Back_End/](github)












### For development

Used for eslint rule sort imports to automaticaly format code on save 

`mkdir .vscode`</br>

`cd .vscode`</br>

`touch settings.json`</br>
```
echo '{
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": "explicit"
    }
}' > settings.json
```