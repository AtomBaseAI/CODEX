# Codex



### Inputs required for API call -

| Parameter | Description                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| "src"     | Should contain the script that needs to be executed                                                                           |
| "stdin"   | In case the script requires any kind of input for execution, leave empty if no input required                                 |
| "lang"    | Language that the script is written in for example: java, cpp, etc. (Check language as a payload down below in next question) |

### What are the languages that are supported for execution?

All the Languages are listed below .
| Languages | Language as a payload |
|-----------|-----------------------|
| C++ | cpp |
| Java | java |
| Python | python3 |
| C | c |
| GoLang | go |
| JS | javascript |

### On Postman : `(recommended)`

Sending a json post request to `https://atomlabs.com/api/v1/submit`

### It is a c++ script to print Hello World.

```json
{
  "src": "\n\n#include<bits/stdc++.h>\n\nusing namespace std ;\n\nint main()\n{  cout << \"Hello World \"<< endl ;}",
  "stdin": "48\n95",
  "lang": "cpp"
}
```

The output is a JSON object comprising only one parameter that is the output.

```json
{
  "message": "Successfully ran it",
  "data": {
    "output": "Hello World\n",
    "error": ""
  },
  "err": {},
  "success": true
}
```

<br>
<br>
