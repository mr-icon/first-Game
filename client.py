import socket

server = socket.socket()
host = '127.0.0.1'
port = 1234

run = True
server.connect((host, port))
while True:
    msg = server.recv(1024)
    print(msg.decode('UTF-8'))
    server.send('Client Online .....'.encode('UTF-8'))