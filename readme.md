# Socket.io Example

```shell
yarn add socket.io
```

### server side

```javascript
// server
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('add user', ({ username }) => {
    console.log(`new user added: ${username}`);
  });
});
```

### client side
```javascript
const io = require('socket.io-client')();

io.emit('add user', {
  username: 'Jay',
});
```

將此功能加在 ```<form>``` 或是 ```<button>``` 皆可。

__```io```__ 透過 __emit__ 時間名稱 'add user' 與伺服器端相呼應，並傳送 JSON 物件資料，即可取得。
