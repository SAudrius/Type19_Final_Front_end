














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