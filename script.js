'use strict';

// DATA

const account={
    "AccountName": "Current Account",
    "BankBalance": 'XXXXX',
    "transactionamount" : 15000,
    "transactiondate": "2022-08-12 15:55",

    "PaymentType": {
    "Id": 'X',
    "Name": "Bank to Wallet Transfer"
    },
    
    "senderDetails" : {
    "sender": "Saurabh Sharma",
    "bank" : "SBI",
    "IFSC": "SBIN016095",
    "accountno": "xxxxxxxxx5736",
    "transactiondate" : "2022-08-12 15:55",
    },
    
    "recieverDetails" : {
    "reciever": "Saurabh Sharma",
    "wallet" :" Growpital Wallet ",
    "referenceno": "DBTR/222201998174",
    "transactiondate" : "2022-08-12 15:55",
    },
    
    "paymentmethod": "UPI",
    "transactionId": "DBTR/222201998174"
}

// ELEMENTS

const labelAdd= document.querySelector('.add');
const labelTo= document.querySelector('.to');
const labelContinue= document.querySelector('.continue');
const secondContainer = document.querySelector('.second-container');
const container= document.querySelector('.container');
const exitReceipt= document.querySelector('.cancel');
const body = document.querySelector('body');
const status= document.querySelector('.left-status');
const sender= document.querySelector('.content');
const reciver= document.querySelector('.content-two');
const setContainer= document.querySelector('.set-container');


const html=`<main class="main">
<header class="status">
    <div class="left-status">
        <p>Money added to wallet <br>from bank account <br><b>${account.transactionamount}</b><br>${account.transactiondate}</p>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="arrow">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                    </svg>
</header>
<section class="green-label">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tick">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
    <div class="complete">
        <p class="notification">Transaction Complete!</p>
        <p class="tap">Tap to view this transaction</p>
    </div>
</section>
<section class="box">
    <div class="from">
        <div class="content">
            <p class="mustard">From</p>
            <p class="name">${account.senderDetails.sender}</p>
            <p class="address"><i>${account.senderDetails.bank}
            ${account.senderDetails.IFSC}</i></p>
            <p class="account-number"><i>${account.senderDetails.accountno}</i></p>
            <p class="data-and-time">${account.senderDetails.transactiondate}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sender">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          


    </div>
    <div class="To">
    <div class="content-two">
    <p class="mustard">To</p>
            <p class="name">${account.recieverDetails.reciever}</p>
            <p class="address"><i>${account.recieverDetails.wallet}</i></p>
            <p class="account-number"><i>${account.recieverDetails.referenceno}</i></p>
            <p class="data-and-time">${account.recieverDetails.transactiondate}</p>
            </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="green">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>

    </div>
    <div class="payment">
        <div class="method">
            <p class="upi">${account.paymentmethod}</p>
            <p class="id">${account.transactionId}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="double-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
            </svg>
          
            
            </div>
</section>
<footer>
    <button class="help">Help</button>
    <button class="share">Share</button>
</footer>

</main>`


secondContainer.classList.add('hidden');


const showReceipt= function(){
secondContainer.classList.remove('hidden');
container.classList.add('blur');
};
labelAdd.addEventListener('click', showReceipt);


const closeReceipt=function(){
    secondContainer.classList.add('hidden');
    container.classList.remove('blur');
}
exitReceipt.addEventListener('click', closeReceipt );




 document.addEventListener('keydown', function(event) {
 event.preventDefault();
 if(event.key === 'Escape' && !container.classList.contains('hidden'))
 secondContainer.classList.add('hidden');
 container.classList.remove('blur');
 });

setContainer.insertAdjacentHTML('beforeend', html);









