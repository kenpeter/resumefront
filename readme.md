# Intro

A brief guide on how to build a simple React and Redux website with Express backend, from start to end.

Demo: https://resumefront.shopshop.space/

## Buy a domain name
Yes, you need a domain name. I know you can run from you machine. Some domain name is cheap, like $1 that cheap. Go to namecheap.com and buy one. Paypal is supported. Here is a video demo: https://www.youtube.com/watch?v=Zbcn4skYXqM

## Buy a server
Head to vpsdime.com, and buy a Ubuntu server.
* Ubuntu 16.04, 64 bit
* 4 CPUs
* 12G Memory
* 60G SSD (You can use 30G in $7/month, but when you keep installing stuff. It gets full easily.)
* $14/month

Paypal is supported. Once you got your server, write down your ip address. Because you need to login into namecheap.com and point your new domain (by creating a A record) to that ip.

## Build the server
* Login into the server with ssh
* Install Nginx, NVM, MongoDB, Letsencrypt, etc.....
* Basically, the flow is Nginx -> fontend (React/Redux) -> backend (Express server) -> Json web token -> MongoDB. There are lots of things to install, if necessary I will put more instructions here.

## About the front end
* Git clone https://github.com/kenpeter/resumefront
* It use ```nwb```


# Ref
* https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.44hlq3vvt
* https://github.com/stowball/dummys-guide-to-redux-and-thunk-react
* https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react
* https://medium.com/@kkomaz/react-to-async-await-553c43f243e2

* https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
