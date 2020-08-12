'use strict';

// *** Fashion Show Page JS***



// *** End Fashion SHow Page JS ***

// *** About Us / Contact Page JS ***
const userInfoArray = [{
name: '',
email: '',
comments: ''
}]

const buildModal = () => {
    let domString = '';
    for (let i = 0; i < userInfoArray.length; i++) {
    domString += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Is this correct?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Name: ${userInfoArray[i].name}</p>
          <p>Email: ${userInfoArray[i].email}</p>
          <p>Comments: ${userInfoArray[i].comments}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>`
    }
  printModalToDom('modalContainer', domString);
}

const printModalToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

  const submitUserInfo = (e) => {
      const target = e.target.id;

      for (let i = 0; i < userInfoArray.length; i++) {
      if (target === 'formSubmitBtn') {
        const name = document.querySelector('#userName').value;
        const email = document.querySelector('#userEmail').value;
        const comments = document.querySelector('#userComments').value;
        userInfoArray[i].name = name;
        userInfoArray[i].email = email;
        userInfoArray[i].comments = comments;
      }
    }
  }

  const contactButtonEvent = () => {
  document.querySelector('#formSubmitBtn').addEventListener('click', submitUserInfo);
  document.querySelector('#formSubmitBtn').addEventListener('click', buildModal);
  }

  const init4 = () => {
    contactButtonEvent();
  }

  init4();
// *** End About Us / Contact Page JS ***