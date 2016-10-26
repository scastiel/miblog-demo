
Use *Markdown* to write your posts!

```javascript
function timeout(milliseconds = 0) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function main() {
    console.log('Give me a second...');
    await timeout(1000);
    console.log('Ok I\'m here!');
}
```
