                                                     
## Web_Fundamentals Assignment

## What is a protocol stack, and how is it used in web development?
- A protocol stack refers to a group of protocols that are runnning concurrently that are employed for the implementation of network protocol suite.
- The protocols in a stack determine the interconnectivity rules for a layered network model such as in the OSI or TCP/IP models.
- To become a stack the protocols must be interoperable being able to connect both vertically between the layers of the network and horizontally between the end-points of each transmission segment.
- The protocol stack is used to allow the combination of different protocols that each set the boundaries for a number of network activities.
- The layers of Internet protocols are often visualized in a diagram like this:
A diagram of the Internet protocols suite with four layers. From top to bottom:
![](https://cdn.kastatic.org/ka-perseus-images/6a0cd3a5b7e709c2f637c959ba98705ad21e4e3c.svg)
* Application layer: includes boxes for HTTP, DNS, and TLS.
* Transport layer: includes boxes for TCP & UDP.
* Network layer: includes a single box for IP (v4 and v6).
* Link layer: includes boxes for Ethernet & Wireless LAN.
- Resources 
1. [https://www.techopedia.com/definition/9005/protocol-stack#:~:text=A%20protocol%20stack%20refers%20to,OSI%20or%20TCP%2FIP%20models.][PlDb]
2. https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:the-internet-protocol-suite/a/the-internet-protocols

## What are the different types of web servers, and how do they differ in terms of functionality and performance?
- Top 11 types of server are given below:

1. Application servers:
Application server is a server which is used to host the application. Application server are system software upon which web application or desktop applications run. It consists of web server connector, computer programming language, database connector, runtime libraries and the Administration code. Application server frameworks are Software framework for building application server. It allows users to create both web application and server environment.
2. Client servers: 
Client server is a distributed application that partition task or workload between the providers of resource or service called servers and service requesters are called as client Both clients and server communicate with each other over computer network on separate software hardware, but both client and server by reside in the system. Client does not share any of its resources but request resources from server
3. Collaboration Servers:
The goal of collaboration server is to support conduct of shared activities of software development teams. Its main concern is to support project management activities rather than project products. Collaboration server provide scheduling support for each project, team or individual. Also provides alerts for schedule reviews and collaboration event.
4. Mail Servers: 
Mail server is server that handles and delivers email over a network, usually over the internet. It receives email from client computers and deliver them to other mail server. It also delivers email to client computers. Client computer is normal computer where user read their emails for examples computer at home or office. Also advanced mobile or smartphones with email facilities are considered client computers.
5. FTP Servers: 
FTP server is used for transferring files supporting sub directories, log in and set of manipulation commands. It can also be used to upload HTML pages on HTTP server or download log files to remote PC. Access control interface allows users to start or stop FTP server and to manage the built-in user accounts. It uses user callback function to send the notification about FTP server to user application.
6. Proxy Servers: 
Proxy server is a server application that acts as an intermediary for request from clients seeking resources from servers that provide those resources. Proxy server functions behalf of the client when requesting service, potentially masking the true origin of the request to the resource server. Proxy server are used as content control software, to filter the encrypted data, logging, and eavesdropping, repairing errors, accessing services, cross-domain resources, security, etc.
7. Telnet Servers: 
Telnet server is an application protocol used to provide bidirectional interactive text orientated communication service using virtual terminal connection over internet. Telnet client application are available for virtually all computer platforms. On remote host, telnet server provides access to the command-line interface. Using TCP, user data and telnet control information is transferred on data connection.
8. Real Time Communication Server: 
Real time communication server is also known as chat server or IRC server. It refers to instant messaging servers. Real time communication server allows large number of users to exchange the information near instantaneously. For example, call over mobile phone or landline, instant messaging like WhatsApp, Facebook, Instagram, Live tv news, video calls, etc.
9. Open Source Servers: 
Open source server is a public domain software designed to deliver web pages over www. It runs on computers that is connected to the internet. Open source servers support file uploading and downloading using FTP, provides security features. It also supports other communication protocols.
10. Web Server: 
Web server is a computer software and underlying hardware that Accept request through HTTP. HTTP is a network protocol which is used to distribute the web pages. Using HTTP web browser send request to the server and initiate the communication. Then web server responds with the resources or content or error message. web server also accepts and store the resources sent from the user agent.
11. Virtual Servers: 
Virtual server is a server that is located in an offsite data center and its resources are shared by multiple users who have control over it. In other words, we can say that virtual server converts one physical server into multiple virtual machine where each can run their operating systems. Virtual servers are a more efficient use of power and can increase a server’s utilization from the typical 15 percent to as much as 80 percent. They are used for variety of applications from remote file access to web design and development.
- Recources -
1. https://www.educba.com/server-types/
Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

## What is web hosting, and what are the different types of hosting services available for websites?
- Web hosting is an online service that makes your website’s content accessible on the internet. When you purchase a hosting plan, you are renting space on a physical server to store all the website’s files and data.
- Web hosts provide the hosting technology and resources required for the effective and secure operation of your website. They are responsible for keeping the server up and running, implementing security measures, and ensuring that data such as texts, photos, and other files are transferred successfully to the visitors’ browsers.

- Types of Web Hosting Services:
1. Shared Hosting:
With shared hosting, multiple users share the same server resources, including memory, processing power, and storage space.
Because of its simplicity and affordability, shared web hosting is an excellent solution for small businesses and personal websites that do not require advanced configuration or higher bandwidth. Hence, shared hosting is an excellent choice for beginners that need cheap hosting to start.

2. Virtual Private Server (VPS) Hosting:
With this web hosting type, your website also shares a physical server with other users, but the web host creates a virtual partition for each user. Thus, a site hosted on a virtual private server get an allocated amount of resources.
VPS web hosting is a great option for medium-sized sites, eCommerce shops, and large blogs with a rapidly growing number of visitors.

3. Cloud Hosting:
This web hosting solution uses several virtual servers to host sites. Thus, if one server experiences high traffic or a problem, the remaining ones will take over and maintain the website operating.
Since cloud based web hosting relies on a cluster of web servers to function, businesses with multiple websites and large-scale sites like eCommerce shops can benefit the most from it, as it provides little to no downtime.

4. WordPress Hosting:
This type of CMS web hosting service provides a WordPress-optimized server environment to help your site load faster and minimize potential issues. However, other types of web hosting still work for websites based on this popular content management system (CMS).
Typically, the best WordPress hosting plans come with features such as pre-installed themes, plugins for core functions like caching and security, and other tools.

5. Dedicated Hosting:
Dedicated hosting designates a physical server for each website. By going with dedicated hosting, you can configure the server, choose your desired operating system and software, and customize the entire hosting environment to your specifications.

Renting a dedicated server is just as powerful as having your own on-site server, but with the added benefit of getting professional support from your web host. Thus, dedicated hosting is ideal for large online businesses that deal with heavy traffic.
- Resources
1. https://www.hostinger.in/tutorials/what-is-web-hosting/

## What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?
- Scalability is the ability of your web application to cope with an increasing number of users concurrently interacting with the app. Consequently, a scalable web application is one that performs equally well with one or a thousand users and stands ups and downs of the traffic.
- With web applications potentially attracting vast amounts of traffic, scalability is a fundamental concern. It's important to ensure that web apps can expand to handle traffic influxes and maintain performance and security.

- Horizontal scaling:
Horizontal scaling harnesses the power of multiple physical machines. This 'distributed programming' allocates processing and storage tasks across physical machines connected by a single network.

- Vertical Scaling:
Vertical scaling leverages concurrent programming on a single physical machine. This machine may have multiple cores.

## What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
- SEO stands for search engine optimization. SEO is the process of taking steps to help a website or piece of content rank higher on Google.
- Improve your search engine rankings
1. Understand your online customers.
2. Use keywords on your website.
3. Refresh your page content often.
4. Gain referrals from other websites.
5. Use meta tags in your content.
6. Stay up to date on the latest SEO techniques.
- Resources
1. https://neilpatel.com/what-is-seo/
