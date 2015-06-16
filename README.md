# Torpedo

Torpedo is a generic pass-through websockets server based on socket.io.

## Connecting and receiving messages from Torpedo

The following example uses socket.io javascript client - https://github.com/automattic/socket.io-client
```
var namespace = '/test';
var event = 'NEW_NOTIF';
var torpedoUrl = 'https://torpedo-staging.pro.com'
var socket = io(torpedoUrl + namespace);

socket.on(event, function(data) {
  console.log(data);
});
```

## Broadcasting messages to torpedo clients

Torpedo exposes an api endpoint '/notify' to which messages can be sent as POST requests.
Following is the expected format of the request:

```
POST '/notify'
{
  "namespace":"cooper",
  "event":"NEW_NOTIF",
  "payload":{
  ...
  }
}
```

Any content within the payload will be sent to connected clients without any modifications.
