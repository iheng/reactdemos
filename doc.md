##Error: `output.path` needs to be an absolute path or `/`
###solution:
var path = require('path');
.....
....
..
output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
}
// rest of the configuration
Apart from above two methods, You can also use path.resolve as mentioned here.

path: path.resolve(__dirname, "dist/js")

### different way to create components
 createClass
 class myComponet extend Component
 or Class myComponet extend React.Component
