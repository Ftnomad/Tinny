const buy = document.getElementById('purchase');
const hire = document.getElementById('hire');
const code = document.getElementById('code');


buy.addEventListener('click',function(){
  const phoneNumber = '254787545921';
  const message = 'I would like to purchase the bot NOMAD BOT';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
});

hire.addEventListener('click',function(){
  const email = 'typicaltinny250@gmail.com';
  const subject = 'SERVICE HIRING';
  const body = `I would like to hire you for your Trading experties or programing experties. Reply Immediately for a deal agreement. \nThank you.`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

code.addEventListener('click',function(){
  const email = 'typicaltinny250@gmail.com';
  const subject = 'JOINT WORKFORCE';
  const body = `I'm intrested in working together. Reply soon with the details for the joint workforce empowerment. \nThank you.`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});