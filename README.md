# Good day, let's get start with the project

## 1) Node and NPM

   Make shure that you have installed Node and NPM on your computer.
	
   To check Node verion open your Terminal and enter "node -v".
	
   To check NPM verion enter "npm -v".
	
   <img width="302" alt="Screenshot 2023-09-12 at 06 39 22" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/4840493b-992f-49a4-863e-f4b2942e9971">

   In my dev process I've used Node v16.18.0 and NPM v9.6.7 (Project should run normaly on Node v15 / v17).
   <img width="302" alt="Screenshot 2023-09-12 at 06 34 44" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/0f8e49a3-8125-478d-8fb3-00c1b7eb351e">

   You can download latest node version by following whis link - https://nodejs.org/en.
	
   This is a guide "how to install" for Mac OS and Windows - https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac.
	

## 2) Install dependencies

  Ok, great after completion step 1 open project folder via terminal and enter "npm install" into command line to install all depencies. 
	 
  Press Enter and wait, it can takes time.
<img width="1400" alt="Screenshot 2023-09-12 at 07 22 12" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/1c91c2f9-5d21-4eae-a714-3ffdc4f742ab">


## 3) Start the project

Now we can run our project. 
	 
Enter in terminal "npm start" and wait untill "Compiled successfully!" message.
<img width="1400" alt="Screenshot 2023-09-12 at 07 22 41" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/49ded294-6a2f-4220-af55-fd3f149b400f">
    
Browser should open automatycally.	 
If you closed - just paste in browser url "http://localhost:3000/"
<img width="336" alt="Screenshot 2023-09-12 at 07 23 19" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/132c1432-a8ec-4ac2-8c26-6048211aeacc">


    
## 4) Enjoy ☺️ 



### In the head of project (top right corner) you can find currency list, click it to see coin price in choosen currency
<img width="1388" alt="Screenshot 2023-09-12 at 06 59 20" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/cf3e58c3-388a-4cbc-8665-8c7bb10b2e53">


### The "star" is you pinned coins (it becomes visible if as minimum 1 coun will be pinned), in this list you can unpin coin or open Coin-Info page by clicking on name
<img width="1388" alt="Screenshot 2023-09-12 at 07 01 08" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/78e3bfcf-5c1a-4bed-9a8a-11922d9c92e4">

### Beside the banner you can see coins carousell (scrolling automatically) if you click on coin it will redirect you to Coin-Info page
<img width="1388" alt="Screenshot 2023-09-12 at 07 04 03" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/90b68282-8390-4ae3-b57e-2a73ee94eda3">

### Below this carousel you can find search input field (searching by name amd/or symbol) and coins list (where you can pin a coin by click on star icon or open Coin-Info).
<img width="1388" alt="Screenshot 2023-09-12 at 07 06 02" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/a472b8cf-1f09-4813-9a08-7776c514dd6f">

### On coin-info page you can find description of coin Prices (that can be changed by celecting currency in header) and our lovely "pin star" icon)
<img width="1400" alt="Screenshot 2023-09-12 at 07 09 54" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/a429399b-0e30-4fbd-ad74-658ff4f7d107">

### Second part of coin-info page is a price chart, you can chose time interval and/or currency to change it.
<img width="1428" alt="Screenshot 2023-09-12 at 07 25 13" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/0be28990-ac38-4746-9582-c62a5463fb7e">

### (Note) if you can see bitcoin only, it means that that we received 429 Error from coingecko api (exceeded request limits), need just to wait around 10 minutes
<img width="1428" alt="Screenshot 2023-09-12 at 17 50 23" src="https://github.com/ButikovAndrey/hitech_crypto/assets/109460557/45f58d97-1cbe-4e19-9c49-ffa4a9ce5837">


### P.S. Please keep in mind that all data related with price will bee automatically updated each minute (if you will not update it by yourself).

### P.P.S. Pinned coins stores in localStorage, so you can loose it if you will open app in new browser (it was a part of the task)

Thank you very much :)
